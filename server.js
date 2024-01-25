  const envConfig = require("dotenv").config();
  const express = require("express");
  const Ably = require("ably");
  const app = express();
  const {ABLY_API_KEY, PORT} = process.env;
  
  console.log("Environment variables", envConfig)
  
  let alivePlayers = 0;
  let totalPlayers = 0;
  let gameTickerOn = false;
  const MIN_PLAYERS_TO_START_GAME = 2;
  const GAME_TICKER_MS = 100;
  let gameOn = false;
  let isFirstPlayer = true;

  let peopleAccessingTheWebsite = 0;
  let players = {};
  let playerChannels = {};
  
  // instantiate to Ably
  const realtime = new Ably.Realtime({
    key: ABLY_API_KEY,
    echoMessages: false,
  });

  
  // create a uniqueId to assign to clients on auth
  const uniqueId = function () {
    return "id-" + Math.random().toString(36).substring(2, 16);
  };

  
    app.use(express.static("public"));
  
  app.get("/auth", (request, response) => {
    const tokenParams = { clientId: uniqueId() };
    realtime.auth.createTokenRequest(tokenParams, function (err, tokenRequest) {
      if (err) {
        response
          .status(500)
          .send("Error requesting token: " + JSON.stringify(err));
      } else {
        response.setHeader("Content-Type", "application/json");
        response.send(JSON.stringify(tokenRequest));
      }
    });
  });
  

  app.get("/", (request, response) => {
    response.header("Access-Control-Allow-Origin", "*");
    response.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
      response.sendFile(__dirname + "/view/intro.html");
  });
  
  app.get("/lobby", (request, response) => {
    if (++peopleAccessingTheWebsite > MIN_PLAYERS_TO_START_GAME) {
      response.sendFile(__dirname + "/view/gameRoomFull.html");
    } else {
    response.sendFile(__dirname + "/view/index_mp.html");
  }
  });

  const listener = app.listen(PORT, () => {
    console.log("Your app is listening on port " + listener.address().port);
  });

  realtime.connect();
  realtime.connection.on("connected", () => {
    console.log("connection established");
    gameRoom = realtime.channels.get("game-room");
    deadPlayerCh = realtime.channels.get("dead-player");
    gameRoom.presence.subscribe("enter", (player) => {
      let newPlayerId;
      alivePlayers++;
      totalPlayers++;
    
      newPlayerId = player.clientId;
      playerChannels[newPlayerId] = realtime.channels.get(
        "clientChannel-" + player.clientId
      );
      
      newPlayerObject = {
        id: newPlayerId,
        score: 0,
        nickname: player.data,
        isAlive: true,
        isReady: false,
        isHost: isFirstPlayer
      };
      console.log(newPlayerObject);
      players[newPlayerId] = newPlayerObject;
      console.log(players);
      if(isFirstPlayer) {
        isFirstPlayer = false;
      }
      console.log("isFirstPlayer: " + isFirstPlayer);
      gameRoom.publish("game-state", {
        players: players});
      subscribeToPlayerActions(playerChannels[newPlayerId]);
    });
      gameRoom.presence.subscribe("leave", (player) => {
      let leavingPlayer = player.clientId;
      alivePlayers--;
      totalPlayers--;
      delete players[leavingPlayer];
      if (totalPlayers <= 0) {
        resetServerState();
      }
      console.log("leaveGame");
      });
  });

  function resetServerState() {
    peopleAccessingTheWebsite = 0;
    isFirstPlayer = true;
    gameOn = false;
    gameTickerOn = false;
    totalPlayers = 0;
    alivePlayers = 0;
    for (let item in playerChannels) {
       playerChannels[item].unsubscribe();
    }
  }
  
  function resetPlayerState() {
    for (let item in players) {
      players[item].isAlive = true;
      players[item].score = 0;
    }
  }


  // subscribe to each player's input events
  function subscribeToPlayerActions(channelInstance) {
    console.log("subscribeToPlayerInput");
    channelInstance.subscribe("start-game", (msg) => {
      if (peopleAccessingTheWebsite < MIN_PLAYERS_TO_START_GAME) {
        console.log("not enough player!");
      } else
      {
        // fan out the latest game state
        gameRoom.publish("game-state", {
          players: players,
          playerCount: totalPlayers,
          gameOn: true});
        console.log("gameSTART!");
      }
    });
    channelInstance.subscribe("restart-game", (msg) => {
        resetPlayerState();
        // fan out the latest game state
        gameRoom.publish("game-state", {
          players: players,
          playerCount: totalPlayers,
          gameOn: true});
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
          isPaused: true});
        console.log("gamePAUSED!");
    });
    channelInstance.subscribe("row-cleared", (msg) => {
      players[msg.clientId].score = msg.data.deletedRows,
        gameRoom.publish("game-state", {
          players: players,
          problemID: msg.data.problemID});
          console.log("rowCleared: " + msg);
          console.log("msg.data.problemID: " + msg.data.problemID);
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
          loserPlayer: players[msg.clientId]});
        console.log("gameOver: " + msg);
    });
    channelInstance.subscribe("get-players", (msg) => {
        gameRoom.publish("game-state", {
          getPlayers: true,
          players: players});
        console.log("getPlayers: " + players);
    });
  }