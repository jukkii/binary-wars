const 
{
    Worker,
    isMainThread,
    parentPort,
    threadId,
    workerData,
} = require("worker_threads");
const envConfig = require("dotenv").config();
const Ably = require("ably");
const {ABLY_API_KEY, PORT} = process.env;

let alivePlayers = 0;
let totalPlayers = 0;
const MIN_PLAYERS_TO_START_GAME = 2;
const GAME_TICKER_MS = 100;
let gameOn = false;
let isFirstPlayer = true;
let gameRoom;
let gameRoomName = workerData.hostRoomCode + ":primary";
let roomCode = workerData.hostRoomCode;
let hostClientId = workerData.hostClientId;
let hostNickname = workerData.hostNickname;
let spawnSpeed = workerData.spawnSpeed;
let spawnCount = workerData.spawnCount;
let spawnCountStart = workerData.spawnCountStart;
let playerChannels = {};
let players = {};

let lobbiesChannel;
let highScore = {};
let highScoreChannel;
const mysql = require("mysql2");

var con = mysql.createConnection({
        port: "3306",
        host: "127.0.0.1",
        user: "connect1",
        password: "x?7e13Y9mq2F"
})

con.connect(function(err) {
        if(err) throw err;
        console.log("Connected to mySQL");
});

// instantiate to Ably
const realtime = new Ably.Realtime({
    key: ABLY_API_KEY,
    echoMessages: false,
  });



realtime.connect();
realtime.connection.on("connected", () => {
    highScoreChannel = realtime.channels.get("highScore");
    gameRoom = realtime.channels.get(gameRoomName);
    lobbiesChannel = realtime.channels.get("lobbies");
    console.log("connection established");
    gameRoom.presence.subscribe("enter", (player) => {
        let newPlayerId;
        alivePlayers++;
        totalPlayers++;
        parentPort.postMessage({
            roomName: roomCode,
            totalPlayers: totalPlayers,
            spawnSpeed: spawnSpeed,
            spawnCount: spawnCount,
            spawnCountStart: spawnCountStart,
            gameOn: gameOn,
        });

        newPlayerId = player.clientId;
        playerChannels[newPlayerId] = realtime.channels.get(
            workerData.hostRoomCode + ":clientChannel-" + player.clientId
        );

        newPlayerObject = {
            id: newPlayerId,
            score: 0,
            nickname: player.data.nickname,
            isAlive: true,
            isReady: false,
            isHost: player.data.isHost
        };players[newPlayerId] = newPlayerObject;
        gameRoom.publish("game-state", {
            isReady: true,
            players: players
        });
        subscribeToPlayerActions(playerChannels[newPlayerId]);
    });
    gameRoom.presence.subscribe("leave", (player) => {
        let leavingPlayer = player.clientId;
        alivePlayers--;
        totalPlayers--;
        parentPort.postMessage({
            roomName: roomCode,
            totalPlayers: totalPlayers,
        });
        delete players[leavingPlayer];
        if (totalPlayers <= 0) {
            killWorkerThread();
        }
    });
    gameRoom.publish("thread-ready", {
        start: true,
    });
});

function killWorkerThread() {
    parentPort.postMessage({
        resetEntry: true,
        roomName: roomCode,
    });
    for (let item in playerChannels) {
        playerChannels[item].detach();
    }
    process.exit(0);
}


function resetPlayerState() {
    for (let item in players) {
        players[item].isAlive = true;
        players[item].score = 0;
    }
}

function subscribeToPlayerActions(channelInstance) {
    console.log("subscribeToPlayerInput");

    channelInstance.subscribe("start-game", (msg) => {
        if(totalPlayers == MIN_PLAYERS_TO_START_GAME) {
            gameRoom.publish("game-state", {
                players: players,
                spawnSpeed: spawnSpeed,
                spawnCount: spawnCount,
                spawnCountStart: spawnCountStart,
                playerCount: totalPlayers,
                gameOn: true
            });
            console.log("gameSTART!");
        } else {
            console.log("not enough player");
        }
    });
    channelInstance.subscribe("restart-game", (msg) => {
        resetPlayerState();
        gameRoom.publish("game-state", {
            players: players,
            playerCount: totalPlayers,
            gameOn: true
        });
        console.log("gameRESTART!");
    });
    channelInstance.subscribe("left-lobby", (msg) => {
        let leavingPlayer = msg.clientId;
        delete players[leavingPlayer];
        gameRoom.publish("game-state", {
            leftLobby: true,
            id: msg.clientId,
            players: players
        });
        console.log("leftLobby!");
    });
    channelInstance.subscribe("toggle-ready", (msg) => {
        players[msg.clientId].isReady = msg.data.isReady,
        gameRoom.publish("game-state", {
            isReady: true,
            players: players,
            id: msg.clientId
        });
        console.log("player " + players[msg.clientId].nickname + " toggled ready to " + msg.data.isReady);
        console.log(players[msg.clientId]);
    });
    channelInstance.subscribe("pause-game", (msg) => {
        gameRoom.publish("game-state", {
              isPaused: true
        });
        console.log("gamePAUSED!");
    });
    channelInstance.subscribe("row-cleared", (msg) => {
        players[msg.clientId].score = msg.data.deletedRows,
        gameRoom.publish("game-state", {
            rowCleared: true,
            players: players,
            problemID: msg.data.problemID
        });
        console.log("rowCleared: " + msg);
    });
    channelInstance.subscribe("row-spawned", (msg) => {
        gameRoom.publish("game-state", {
            rowSpawned: true,
            problemMode: msg.data.problemMode,
            bitString: msg.data.bitString,
            id: msg.clientId
        });
        console.log("row-spawned: " + msg);
    });
    channelInstance.subscribe("game-over", (msg) => {
        players[msg.clientId].isAlive = msg.data.isAlive,
        gameRoom.publish("game-state", {
            gameOver: true,
            loserPlayer: players[msg.clientId]
        });
        console.log("gameOver: " + msg);
    });
    channelInstance.subscribe("get-players", (msg) => {
        gameRoom.publish("game-state", {
            getPlayers: true,
            players: players
        });
        console.log("getPlayers: " + JSON.stringify(players));
    });
   lobbiesChannel.subscribe("lobbies", (msg) => {
        lobbiesChannel.publish("send-lobbies", {
            sendLobbyInfo: true,
            spawnSpeed: msg.data.spawnSpeed,
            spawnCount: msg.data.spawnCount,
            spawnCountStart: msg.data.spawnCountStart,
            roomName: msg.data.roomName,
            guideOn: msg.data.guideOn,
            suddenDeathOn: msg.data.suddenDeathOn
        });
   });

    channelInstance.subscribe("game-options", (msg) => {
        gameRoom.publish("game-state", {
            gameOptions: true,
            speed: msg.data.spawnSpeed,
            spawnCount: msg.data.spawnCount,
            spawnCountStart: msg.data.spawnCountStart,
            roomName: msg.data.roomName,
            guideOn: msg.data.guideOn,
            suddenDeathOn: msg.data.suddenDeathOn
        });
        console.log("game-options: " + msg);
    });
    channelInstance.subscribe("sudden-death", (msg) => {
        gameRoom.publish("game-state", {
            suddenDeath: true,
            problemMode: msg.data.problemMode,
            randomBitString: msg.data.randomBitString
        });
        console.log("sudden-death: " + msg);
    });
    channelInstance.subscribe("sudden-death-end", (msg) => {
        gameRoom.publish("game-state", {
            suddenDeathEnd: true,
            winnerPlayer: msg.clientId
        });
        console.log("sudden-death-end: " + msg);
    });
}