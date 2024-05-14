const problemWindowDiv = document.getElementById("problem-window-div");
const startDiv = document.createElement("button");
const gameContainer = document.getElementById("game-container");
const oppProblemWindowDiv = document.getElementById("opp-problem-window-div");
const oppGameDiv = document.getElementById("opp-game-div");
const oppScoreDiv = document.getElementById("opp-score-div");
const oppScore1Div = document.getElementById("opp-score1-div");
const oppButtonDiv = document.getElementById("opp-button-div");
const oppGuideDiv = document.getElementById("opp-guide-div");
const oppGuideDiv1 = document.getElementById("opp-guide-div1");
const joinCreateLobbyDiv = document.createElement("div");
const highScoreDiv = document.getElementById("highscore-div");
const infoDiv = document.createElement("div");


let visitorCount;
let highScoreChannel;
let highScore = {};
const visitorCountDiv = document.createElement("div");
visitorCountDiv.setAttribute("hidden", true);
let lobbies = {};
let lobbiesChannel;
let spawnSpeed = 15000;
let spawnCount = 1;
let spawnCountStart = 1;
let guideOn = true;
let suddenDeathOn = false;
const lobbiesDiv = document.createElement("div");
let roomNameString;
//connect to ably
const realtime = new Ably.Realtime({
    authUrl: "/auth"
});

realtime.connection.once("connected", () => {
    console.log("connected");
    lobbiesChannel = realtime.channels.get("lobbies");
    lobbiesChannel.presence.enter({
    });
    lobbiesChannel.subscribe("lobbies", (msg) => {
        if (msg.data.getLobbyInfo) {
            lobbies[msg.data.roomName] = msg.data.lobby;
            createLobbyInfo(lobbies[msg.data.roomName]);
            console.log("lobbyInfo: " + JSON.stringify(msg.data.lobby));
        }
        if (msg.data.getLobbies) {
            lobbies = {};
            lobbies = msg.data.lobbies;
            console.log("lobbies: " + JSON.stringify(lobbies));
            console.log(Object.keys(lobbies));
            if (Object.keys(lobbies) < 0) {
                console.log("no lobbies");
                lobbiesDiv.innerHTML = "no active lobbies";
            } else {
                let lobbydivs = document.getElementsByClassName("lobby-info-div");
                console.log(lobbydivs);
                for (let i = 0; i < lobbydivs.length; i++) {
                    console.log("i: " + i + ", lobby: " + lobbydivs[i]);
                    lobbydivs[i].remove();
                }
                for (let lobby in lobbies) {
                    console.log(JSON.stringify(lobby));
                    let newLobbyInfoDiv = document.createElement("button");
                    let newLobbyNameDiv = document.createElement("div");
                    let newLobbyUserCountDiv = document.createElement("div");
                    newLobbyNameDiv.setAttribute("class", "lobby-name-div");
                    newLobbyUserCountDiv.setAttribute("class", "lobby-user-count-div");
                    newLobbyInfoDiv.setAttribute("class", "lobby-info-div");
                    newLobbyInfoDiv.setAttribute("name", lobbies[lobby].roomName);
                    newLobbyInfoDiv.setAttribute("onclick", "getLobbyInfo(this.name)");
                    newLobbyNameDiv.innerText = lobbies[lobby].roomName;
                    newLobbyUserCountDiv.innerText = lobbies[lobby].totalPlayers;
                    newLobbyInfoDiv.appendChild(newLobbyNameDiv);
                    newLobbyInfoDiv.appendChild(newLobbyUserCountDiv);
                    lobbiesDiv.appendChild(newLobbyInfoDiv);
                }
            }
        }
    });
    highScoreChannel = realtime.channels.get("highScore");
    highScoreChannel.presence.enter({
    });


    highScoreChannel.subscribe("highScore", (msg) => {
        if (msg.data.getVisitorCount) {
            //                      console.log("getVisitorCount");
            visitorCount = msg.data.count;
            visitorCountDiv.innerText = visitorCount;
        }
        if (msg.data.getHighScore) {
            highScore = {};
            highScoreDiv.innerHTML = "Highscore:<br><br>";
            //                      console.log("getHighScore");
            //                      console.log(msg.data);
            highScore = msg.data.highScore;
            //                      console.log(typeof highScore);
            //                      console.log(highScore);
            for (let user in highScore) {
                let newhighScoreUserDiv = document.createElement("div");
                let newhighScoreUserNameDiv = document.createElement("div");
                let newhighScoreUserCountDiv = document.createElement("div");
                newhighScoreUserCountDiv.setAttribute("class", "highscore-user-count-div");
                newhighScoreUserDiv.setAttribute("class", "highscore-user-div");
                newhighScoreUserNameDiv.innerText = highScore[user].nickname;
                newhighScoreUserCountDiv.innerText = highScore[user].score;
                newhighScoreUserDiv.appendChild(newhighScoreUserNameDiv);
                newhighScoreUserDiv.appendChild(newhighScoreUserCountDiv);
                highScoreDiv.appendChild(newhighScoreUserDiv);
            }
        }
    });
    //      highScoreChannel.publish("get-highScore", {
    //      });
});

function getLobbyInfo(lobbyName) {
    lobbiesChannel.publish("get-lobby-info", {
        roomName: lobbyName
    });
    createLobbyInfo(lobbies[lobbyName]);
    console.log(lobbyName);
}

function createLobbyInfo(lobby) {
    infoDiv.remove();
    oppGameDiv.appendChild(joinCreateLobbyDiv);
    joinCreateLobbyDiv.setAttribute("class", "waiting-div");
    joinCreateLobbyDiv.innerHTML = "Lobby Info:";
    if (lobby.spawnSpeed !== undefined || lobby.spawnCount !== undefined || lobby.spawnCountStart !== undefined) {
        spawnSpeed = lobby.spawnSpeed;
        spawnCount = lobby.spawnCount;
        spawnCountStart = lobby.spawnCountStart;
        guideOn = lobby.guideOn;
        suddenDeathOn = lobby.suddenDeathOn;
    } else {
        spawnSpeed = 15000;
        spawnCount = 1;
        spawnCountStart = 1;
        guideOn = true;
        suddenDeathOn = false;
    }
    let guideString;
    if (guideOn)
        guideString = "On";
    else
        guideString = "Off";
    let suddenDeathString;
    if (suddenDeathOn)
        suddenDeathString = "On";
    else
        suddenDeathString = "Off";
    roomNameString = lobby.roomName;
    infoDiv.innerHTML = "Lobbyname: " + lobby.roomName + "<br>User in Lobby: "
        + lobby.totalPlayers + "<br>Speed: " + spawnSpeed + "<br>SpawnCount: "
        + spawnCount + "<br>Spawns at Start: " + spawnCountStart + "<br>Guide : "
        + guideString + "<br>Sudden Death: " + suddenDeathString + "<br>";
    infoDiv.setAttribute("class", "info-div");
    let lobbyJoinButton = document.createElement("button");
    lobbyJoinButton.setAttribute("class", "join-lobby-button");
    lobbyJoinButton.setAttribute("onclick", "joinLobby()");
    lobbyJoinButton.innerText = "Join Lobby";
    infoDiv.appendChild(lobbyJoinButton);
    joinCreateLobbyDiv.appendChild(infoDiv);
    oppProblemWindowDiv.appendChild(joinCreateLobbyDiv);
}

function joinLobby() {
    let nickName = document.getElementById("nickname-input").value;
    console.log("nickName: " + nickName);
    if (nickName != "") {
        localStorage.setItem("isHost", false);
        localStorage.setItem("nickname", nickName);
        localStorage.setItem("roomCode", roomNameString);
        window.location.replace("/lobby?roomCode=" + roomNameString + "&isHost=false");
    } else {
        infoDiv.remove();
        infoDiv.innerHTML = "please choose a nickname";
        joinCreateLobbyDiv.appendChild(infoDiv);
        setTimeout(() => {
            createLobbyInfo(lobbies[roomNameString]);
        }, 2000);
    }
}

start();

function showSingleplayer() {
    window.location.replace("/singleplayer");
}

function showMultiplayer() {
    window.location.replace("/multiplayer");
}

function backToHome() {
    window.location.replace("/multiplayer");
}

function start() {
    startDiv.setAttribute("class", "start-div");
    startDiv.innerHTML = "Lobbies:";
    let refreshButton = document.createElement("button");
    refreshButton.innerText = "refresh";
    refreshButton.setAttribute("class", "refresh-button");
    refreshButton.setAttribute("onclick", "refreshLobbies()");
    let backButton = document.createElement("button");
    backButton.innerText = "back";
    backButton.setAttribute("class", "back-button");
    backButton.setAttribute("onclick", "backToHome()");
    let nickNameInput = document.createElement("input");
    nickNameInput.setAttribute("id", "nickname-input");
    nickNameInput.setAttribute("class", "lobby-nickname-input");
    let nickNameInputDiv = document.createElement("div");
    nickNameInputDiv.setAttribute("class", "nickname-input-div");
    nickNameInputDiv.innerHTML = "Nickname: ";
    nickNameInputDiv.appendChild(nickNameInput);
    nickNameInputDiv.appendChild(refreshButton);
    nickNameInputDiv.appendChild(backButton);
    startDiv.appendChild(nickNameInputDiv);
    startDiv.setAttribute("onclick", "createOpponentJoinCreateLobbyWindow()");
    lobbiesDiv.setAttribute("class", "lobbies-div");
    const lobbyDiv = document.createElement("div");
    lobbyDiv.setAttribute("class", "lobby-info-div");
    lobbiesDiv.appendChild(lobbyDiv);
    startDiv.appendChild(lobbiesDiv);
    problemWindowDiv.appendChild(startDiv);
    createOpponentJoinCreateLobbyWindow();
    createHighscore();
}

function refreshLobbies() {
    let rooms = document.getElementsByClassName("lobby-info-div");
    console.log(rooms);
    for (let i = 0; i < rooms.length; i++) {
        console.log("i: " + i + ", lobby: " + rooms[i]);
        rooms[i].remove();
    }
    lobbiesChannel.publish("get-lobbies", {
    });
}


function createOpponentJoinCreateLobbyWindow() {
    if (infoDiv != null)
        infoDiv.remove();
    oppGameDiv.appendChild(joinCreateLobbyDiv);
    joinCreateLobbyDiv.setAttribute("class", "waiting-div");
    joinCreateLobbyDiv.innerHTML = "Lobby Info:";
    infoDiv.innerHTML = "no lobby selected";
    infoDiv.setAttribute("class", "info-div");
    joinCreateLobbyDiv.appendChild(infoDiv);
    oppProblemWindowDiv.appendChild(joinCreateLobbyDiv);
}

function createHighscore() {
    visitorCountDiv.setAttribute("class", "visitor-count-div");
    visitorCountDiv.innerText = visitorCount;
}