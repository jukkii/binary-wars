//create worker threads
const 
{
    Worker,
    isMainThread,
    parentPort,
    workerData,
    threadId,
    MessageChannel,
} = require("worker_threads");
  
//load packages und configs
const envConfig = require("dotenv").config();
const express = require("express");
const Ably = require("ably");
const app = express();
const {ABLY_API_KEY, PORT} = process.env;
const mysql = require("mysql2");
  
console.log("Environment variables", envConfig)
  
//lobby variables
const globalGameName = "main-game-thread";
const GAME_ROOM_CAPACITY = 2;
let globalChannel;
let activeGameRooms = {};
let lobbiesChannel;
  
//highscore variables
let highScore = {};
let highScoreSP = {};
let highScoreChannel;
let visitorCount = 0;
let test = false;
let resetter = false;
  
//create connection with mysql
var con;
function connectToMySQL () {
    con = mysql.createConnection({
        port: "3306",
        host: "127.0.0.1",
        user: "connect1",
        password: "x?7e13Y9mq2F"
    });
        
    con.connect(function(err) {
        if (err) throw err;
        console.log("Connected to mySQL");
    });
        
    //use binaryWars DB
    con.query("use binaryWars;", function(err, result) {
        if (err) throw err;
        console.log("connected to binaryWars DB");
    });

    //get visitorCount from DB
    con.query("SELECT * FROM visitorCount", function (err, result) {
        if (err) throw err;
        visitorCount = result[0].count;
    });
}
        
connectToMySQL();
        
// instantiate to Ably
const realtime = new Ably.Realtime({
    key: ABLY_API_KEY,
    echoMessages: false,
});
        
        
// create a uniqueId to assign to clients on auth
const uniqueId = function () {
    return "id-" + Math.random().toString(36).substring(2, 16);
};
        
//use public as static folder
app.use(express.static("public"));
        
//authenticate to ably
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
        
//send singleplayer site if requested
app.get("/singleplayer", (request, response) => {
    response.sendFile(__dirname + "/view/index.html");
});
        
//send multiplayer site if requested
app.get("/multiplayer", (request, response) => {
    response.sendFile(__dirname + "/view/intro.html");
});
        
//send lobbies site if requested
app.get("/lobbies", (request, response) => {
    response.sendFile(__dirname + "/view/lobbies.html");
});
        
//singleplayer site on default
app.get("/", (request, response) => {
    response.header("Access-Control-Allow-Origin", "*");
    response.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    response.sendFile(__dirname + "/view/index.html");
});
        
//lobby site if requested
app.get("/lobby", (request, response) => {
    let requestedRoom = request.query.roomCode;
    let isReqHost = request.query.isHost == "true";
    if (!isReqHost && activeGameRooms[requestedRoom]) {
        if (activeGameRooms[requestedRoom].totalPlayers + 1 <= GAME_ROOM_CAPACITY && !activeGameRooms[requestedRoom].gameOn) {
            response.sendFile(__dirname + "/view/index_mp.html");
        } else {
            response.sendFile(__dirname + "/view/gameRoomFull.html");
        }
    } else if (isReqHost) {
        response.sendFile(__dirname + "/view/index_mp.html");
    } else {
        response.sendFile(__dirname + "/view/gameRoomFull.html");
    }
    console.log(JSON.stringify(activeGameRooms));
});
        
//start listener
const listener = app.listen(PORT, () => {
    console.log("Your app is listening on port " + listener.address().port);
});
        
//connect and create channels
realtime.connect();
realtime.connection.on("connected", () => {
    console.log("connection established");
    lobbiesChannel = realtime.channels.get("lobbies");
    lobbiesChannel.presence.subscribe("enter", (player) => {
        lobbiesChannel.publish("lobbies", {
            getLobbies: true,
            lobbies: activeGameRooms
        });
        console.log("activeGameRooms: " + JSON.stringify(activeGameRooms));
        lobbiesChannel.subscribe("get-lobbies", (msg) => {
            if(!resetter) {
                lobbiesChannel.publish("lobbies", {
                    getLobbies: true,
                    lobbies: activeGameRooms
                });
                resetter = true;
            }
            setTimeout(() => {
                resetter = false;
            },100);        
        });
        lobbiesChannel.subscribe("get-lobby-info", (msg) => {
            if(!resetter) {
                lobbiesChannel.publish("lobbies", {
                    getLobbyInfo: true,
                    lobby: activeGameRooms[msg.data.roomName]
                });
                resetter = false;
            }
            setTimeout(() => {
                resetter = false;
            }, 50);
            console.log("lobby: " + JSON.stringify(activeGameRooms[msg.data.roomName]));
        });
    });
            
    lobbiesChannel.subscribe("send-lobbies", (msg) => {
        console.log("msg: " + JSON.stringify(msg));
        console.log("activeRoom: " + JSON.stringify(activeGameRooms[msg.data.myGameRoomCode]));
        if(msg.data.spawnSpeed !== undefined)
            activeGameRooms[msg.data.myGameRoomCode].spawnSpeed = msg.data.spawnSpeed;
        if(msg.data.spawnCount !== undefined)
            activeGameRooms[msg.data.myGameRoomCode].spawnCount = msg.data.spawnCount;
        if(msg.data.spawnCountStart !== undefined)
            activeGameRooms[msg.data.myGameRoomCode].spawnCountStart = msg.data.spawnCountStart;
        if(msg.data.guideOn !== undefined)
            activeGameRooms[msg.data.myGameRoomCode].guideOn = msg.data.guideOn;
        if(msg.data.suddenDeathOn !== undefined)
            activeGameRooms[msg.data.myGameRoomCode].suddenDeathOn = msg.data.suddenDeathOn;
        console.log("room2: " + JSON.stringify(activeGameRooms[msg.data.myGameRoomCode]));
    });
    highScoreChannel = realtime.channels.get("highScore");
    highScoreChannel.presence.subscribe("enter", (player) => {
        highScore = {};
        con.query("SELECT * FROM visitorCount", function (err, result) {
            if (err) {
                connectToMySQL();
                throw err;
            }
            console.log("Result: " + JSON.stringify(result));
            visitorCount = result[0].count;
            console.log("1visitorCount: " + visitorCount);
            visitorCount = visitorCount + 1;
            console.log("2visitorCount: " + visitorCount);
        });
        con.query("SELECT * FROM highScore ORDER BY score DESC", function(err, result) {
            if (err) {
                connectToMySQL();
                throw err;
            }
            console.log("highScoreResult: " + JSON.stringify(result));
            highScore = result;
        });
        con.query("SELECT * FROM highScoreSP ORDER BY score DESC", function(err, result) {
            if (err) {
                connectToMySQL();
                throw err;
            }
            console.log("highScoreSPResult: " + JSON.stringify(result));
            highScoreSP = result;
        });

        setTimeout(function() {
            con.query("UPDATE visitorCount SET count=" + visitorCount + " WHERE name='visitorCount';", function (err, result) { 
                if (err) {
                    connectToMySQL();
                    throw err;
                }
                console.log("new visitor added to database");
                highScoreChannel.publish("highScore", {
                    getHighScore: true,
                    highScore: highScore
                });
                console.log("sendHighScore: " + highScore);
            });
        }, 5000);
        highScoreChannel.publish("highScore", {
            getVisitorCount: true,
            count: visitorCount
        });
        highScore = {};
        highScoreChannel.subscribe("get-highScore", (msg) => {
            if(!test) {
                con.query("SELECT * FROM highScore ORDER BY score DESC", function(err, result) {
                    if (err) {
                        connectToMySQL();
                        throw err;
                    }
                    highScore = result;
                });
                highScoreChannel.publish("highScore", {
                    getHighScore: true,
                    highScore: highScore
                });
                console.log("get-highscore");
            }
            test = true;
            setTimeout(function() {
                test = false;
            }, 3000);
        });
        highScoreSP = {};
        highScoreChannel.subscribe("get-highScoreSP", (msg) => {
            if(!test) {
                con.query("SELECT * FROM highScoreSP ORDER BY score DESC", function(err, result) {
                    if (err) {
                        connectToMySQL();
                        throw err;
                    }
                    highScoreSP = result;
                });
                highScoreChannel.publish("highScore", {
                    getHighScoreSP: true,
                    highScoreSP: highScoreSP
                });
                console.log("get-highscoreSP");
            }
            setTimeout(function() {
                test = false;
            }, 3000);
        });
        highScoreChannel.subscribe("publish-highScore", (msg) => {
            if(!test) {
                con.query("INSERT INTO highScore (id, nickname, score) values (" + (highScore.length + 1) + ", '" + msg.data.nickname + "', " + msg.data.score + ");", function(err, result) {                        
                    if (err) {
                        connectToMySQL();
                        throw err;
                    }
                    console.log("new highscore added");
                });
                test = true;
            }
            setTimeout(function () {
                test = false;
            }, 3000);
        });
        highScoreChannel.subscribe("publish-highScoreSP", (msg) => {
            if(!test) {
                con.query("INSERT INTO highScoreSP (id, nickname, score) values (" + (highScoreSP.length + 1) + ", '" + msg.data.nickname + "', " + msg.data.score + ");", function(err, result) {
                    if (err) {
                        connectToMySQL();
                        throw err;
                    }
                    console.log("new highscoreSP added");
                });
                test = true;
            }
            setTimeout(function () {
                test = false;
            }, 3000);
        });
    });

    globalChannel = realtime.channels.get(globalGameName);
    // subscribe to new players entering the game
    globalChannel.presence.subscribe("enter", (player) => {
        generateNewGameThread(
            player.data.isHost,
            player.data.nickname,
            player.data.roomCode,
            player.clientId
        );
    });
});
                                        
function generateNewGameThread(isHost, hostNickname, hostRoomCode, hostClientId) {
    if (isHost && isMainThread) {
        const worker = new Worker("./server-worker.js", {
            workerData: {
                hostNickname: hostNickname,
                hostRoomCode: hostRoomCode,
                hostClientId: hostClientId,
            },
        });
        console.log(`CREATING NEW THREAD WITH ID ${threadId}`);
        worker.on("error", (error) => {
            console.log(`WORKER EXITED DUE TO AN ERROR ${error}`);
        });
        worker.on("message", (msg) => {
            if (msg.roomName && !msg.resetEntry) {
                activeGameRooms[msg.roomName] = {
                    roomName: msg.roomName,
                    totalPlayers: msg.totalPlayers,
                    spawnSpeed: msg.spawnSpeed,
                    spawnCount: msg.spawnCount,
                    spawnCountStart: msg.spawnCountStart,
                    gameOn: msg.gameOn,
                };
            } else if (msg.roomName && msg.resetEntry) {
                delete activeGameRooms[msg.roomName];
            }
        });
        worker.on("exit", (code) => {
            console.log(`WORKER EXITED WITH THREAD ID ${threadId}`);
            if (code !== 0) {
                console.log(`WORKER EXITED DUE TO AN ERROR WITH CODE ${code}`);
            }
        });
    }
}