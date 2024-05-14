const problemWindowDiv = document.getElementById("problem-window-div");
const lobbyFullDiv = document.createElement("div");
const gameContainer = document.getElementById("game-container");
const oppProblemWindowDiv = document.getElementById("opp-problem-window-div");
const oppGameDiv = document.getElementById("opp-game-div");
const oppScoreDiv = document.getElementById("opp-score-div");
const oppScore1Div = document.getElementById("opp-score1-div");
const oppButtonDiv = document.getElementById("opp-button-div");
const oppGuideDiv = document.getElementById("opp-guide-div");
const oppGuideDiv1 = document.getElementById("opp-guide-div1");
const joinCreateLobbyDiv = document.createElement("div");


const myNickname = localStorage.getItem("nickname");
const myGameRoomCode = localStorage.getItem("roomCode");
const amIHost = localStorage.getItem("isHost");
const startGameBtn = document.getElementById("btn-startgame");

function showSingleplayer() {
    window.location.replace("/singleplayer");
}

function showMultiplayer() {
    window.location.replace("/");
}

function showFullLobby() {
    lobbyFullDiv.setAttribute("class", "lobby-div");
    let roomCode = localStorage.getItem("roomCode");
    lobbyFullDiv.innerHTML = "Lobby with Code: " + roomCode + " is full or wasnt found!";
    const lobbyFullDivButton = document.createElement("button");
    lobbyFullDivButton.setAttribute("id", "lobby-full-div-back-button");
    lobbyFullDivButton.setAttribute("onclick", "goBack()");
    lobbyFullDivButton.innerText = "Back";
    lobbyFullDiv.appendChild(lobbyFullDivButton);
    problemWindowDiv.appendChild(lobbyFullDiv);
    createOpponentJoinCreateLobbyWindow();
}

showFullLobby();

function goBack() {
    if (joinCreateLobbyDiv != null)
        joinCreateLobbyDiv.remove();
    window.location.replace("/multiplayer")
}

function createOpponentJoinCreateLobbyWindow() {
    gameContainer.appendChild(oppGameDiv);
    oppGameDiv.appendChild(joinCreateLobbyDiv);
    joinCreateLobbyDiv.setAttribute("class", "waiting-div");
    joinCreateLobbyDiv.innerHTML = "Create a Lobby or join an existing Lobby to play";
    oppProblemWindowDiv.appendChild(joinCreateLobbyDiv);
}