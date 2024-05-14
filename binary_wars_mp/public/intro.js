
const problemWindowDiv = document.getElementById("problem-window-div");
const startDiv = document.createElement("div");
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


let visitorCount;
let highScoreChannel;
let highScore = {};
const visitorCountDiv = document.createElement("div");
visitorCountDiv.setAttribute("hidden", true);



//connect to ably
const realtime = new Ably.Realtime({
    authUrl: "/auth"
});

realtime.connection.once("connected", () => {
    console.log("connected");
    highScoreChannel = realtime.channels.get("highScore");
    highScoreChannel.presence.enter({
    });


    highScoreChannel.subscribe("highScore", (msg) => {
        if (msg.data.getVisitorCount) {
            console.log("getVisitorCount");
            visitorCount = msg.data.count;
            visitorCountDiv.innerText = visitorCount;
        }
        if (msg.data.getHighScore) {
            highScore = {};
            highScoreDiv.innerHTML = "Highscore:<br><br>";
            console.log("getHighScore");
            console.log(msg.data);
            highScore = msg.data.highScore;
            console.log(typeof highScore);
            console.log(highScore);
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

    highScoreChannel.publish("add-visitor", {
        addVisitor: true
    });
    highScoreChannel.publish("get-highScore", {
    });
});


start();

function showSingleplayer() {
    window.location.replace("/singleplayer");
}

function showMultiplayer() {
    window.location.replace("/multiplayer");
}

function getRandomRoomId() {
    return "room-" + Math.random().toString(36).substring(2, 8);
}


function start() {
    startDiv.setAttribute("class", "start-div");
    startDiv.innerHTML = "Binary Wars MP";
    const createLobbyDiv = document.createElement("div");
    createLobbyDiv.setAttribute("class", "create-lobby-div");
    const joinLobbyDiv = document.createElement("div");
    joinLobbyDiv.setAttribute("class", "join-lobby-div");

    const createLobbyButton = document.createElement("button");
    const joinLobbyButton = document.createElement("button");
    const showLobbiesButton = document.createElement("button");
    const inputNickName = document.createElement("input");
    inputNickName.setAttribute("class", "nickname-input");
    inputNickName.setAttribute("id", "nickname-input");
    inputNickName.setAttribute("maxlength", "20");
    const inputLobbyCode = document.createElement("input");
    inputLobbyCode.setAttribute("class", "join-lobby-input");
    inputLobbyCode.setAttribute("id", "join-lobby-input");
    inputLobbyCode.setAttribute("maxlength", "20");
    createLobbyButton.innerText = "Create Lobby";
    joinLobbyButton.innerText = "Join Lobby";
    createLobbyButton.setAttribute("onclick", "createLobby()");
    createLobbyButton.setAttribute("id", "lobby-button");
    joinLobbyButton.setAttribute("onclick", "joinLobby()");
    joinLobbyButton.setAttribute("id", "lobby-button");
    showLobbiesButton.innerText = "Show Lobbies";
    showLobbiesButton.setAttribute("onclick", "showLobbies()");
    showLobbiesButton.setAttribute("id", "lobby-button");
    createLobbyDiv.innerHTML = "Nickname: ";
    createLobbyDiv.appendChild(inputNickName);
    createLobbyDiv.appendChild(createLobbyButton);
    startDiv.appendChild(createLobbyDiv);
    joinLobbyDiv.innerHTML = "roomCode: ";
    joinLobbyDiv.appendChild(inputLobbyCode);
    joinLobbyDiv.appendChild(joinLobbyButton);
    startDiv.appendChild(joinLobbyDiv);
    startDiv.appendChild(showLobbiesButton);
    problemWindowDiv.appendChild(startDiv);
    createOpponentJoinCreateLobbyWindow();
    createHighscore();
}

function showLobbies() {
    window.location.replace("/lobbies");
}

function createLobby() {
    localStorage.clear();
    let nicknameInput = document.getElementById("nickname-input");
    nickname = nicknameInput.value;
    roomCode = getRandomRoomId();
    localStorage.setItem("isHost", true);
    if (nickname == "" || roomCode == "") {
        joinCreateLobbyDiv.innerHTML = "please choose a nickname to create a lobby";
        setTimeout(() => {
            createOpponentJoinCreateLobbyWindow();
        }, 2000);
    } else {
        localStorage.setItem("nickname", nickname);
        localStorage.setItem("roomCode", roomCode);
        if (joinCreateLobbyDiv != null)
            joinCreateLobbyDiv.remove();
        window.location.replace("/lobby?roomCode=" + roomCode + "&isHost=true");
    }
}

function joinLobby() {
    localStorage.clear();
    let nicknameInput = document.getElementById("nickname-input");
    nickname = nicknameInput.value;
    roomCode = document.getElementById("join-lobby-input").value;
    localStorage.setItem("isHost", false);
    if (nickname == "" || roomCode == "") {
        joinCreateLobbyDiv.innerHTML = "please choose a <br>nickname/gameRoom";
        setTimeout(() => {
            createOpponentJoinCreateLobbyWindow();
        }, 2000);
    } else {
        localStorage.setItem("nickname", nickname);
        localStorage.setItem("roomCode", roomCode);
        if (joinCreateLobbyDiv != null)
            joinCreateLobbyDiv.remove();
        window.location.replace("/lobby?roomCode=" + roomCode + "&isHost=false");
    }
}

function createOpponentJoinCreateLobbyWindow() {
    oppGameDiv.appendChild(joinCreateLobbyDiv);
    joinCreateLobbyDiv.setAttribute("class", "waiting-div");
    joinCreateLobbyDiv.innerHTML = "Create a Lobby, join an existing Lobby or browse Lobbies to play";
    oppProblemWindowDiv.appendChild(joinCreateLobbyDiv);
}

function createHighscore() {
    visitorCountDiv.setAttribute("class", "visitor-count-div");
    visitorCountDiv.innerText = visitorCount;
}