
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

start();

function getRandomRoomId() {
    return "room-" + Math.random().toString(36).substring(2, 8);
}
  

function start() {
    startDiv.setAttribute("class", "start-div");
    startDiv.innerHTML = "Binary Wars MP<br><br>Nickname:";
    const createLobbyButton = document.createElement("button");
    const joinLobbyButton = document.createElement("button");
    const inputNickName = document.createElement("input");
    inputNickName.setAttribute("class", "nickname-input");
    inputNickName.setAttribute("id", "nickname-input");
    const inputLobbyCode = document.createElement("input");
    inputLobbyCode.setAttribute("class", "join-lobby-input");
    inputLobbyCode.setAttribute("id", "join-lobby-input");
    createLobbyButton.innerText = "Create Lobby";
    joinLobbyButton.innerText = "Join Lobby";
    createLobbyButton.setAttribute("onclick", "createLobby()");
    createLobbyButton.setAttribute("id", "lobby-button");
    joinLobbyButton.setAttribute("onclick", "joinLobby()");
    joinLobbyButton.setAttribute("id", "lobby-button");
    startDiv.appendChild(inputNickName);
    startDiv.appendChild(createLobbyButton);
    startDiv.appendChild(inputLobbyCode);
    startDiv.appendChild(joinLobbyButton);
    problemWindowDiv.appendChild(startDiv);
    createOpponentJoinCreateLobbyWindow();
    createHighscore();
  }
  
  function createLobby() {
    localStorage.clear();
    let nicknameInput = document.getElementById("nickname-input");
    nickname = nicknameInput.value;
    roomCode = getRandomRoomId();
    localStorage.setItem("isHost", true);
    localStorage.setItem("nickname", nickname);
    localStorage.setItem("roomCode", roomCode);
    if(joinCreateLobbyDiv != null)
      joinCreateLobbyDiv.remove();
    window.location.replace("/lobby?roomCode=" + roomCode + "&isHost=true");
  }
  
  function joinLobby() {
    localStorage.clear();
    let nicknameInput = document.getElementById("nickname-input");
    nickname = nicknameInput.value;
    roomCode = document.getElementById("join-lobby-input").value;
    localStorage.setItem("isHost", false);
    localStorage.setItem("nickname", nickname);
    localStorage.setItem("roomCode", roomCode);
    if(joinCreateLobbyDiv != null)
      joinCreateLobbyDiv.remove();
    window.location.replace("/lobby?roomCode=" + roomCode + "&isHost=false");
  }
  
function createOpponentJoinCreateLobbyWindow() {
  // gameContainer.appendChild(oppGameDiv);
  oppGameDiv.appendChild(joinCreateLobbyDiv);
  joinCreateLobbyDiv.setAttribute("class", "waiting-div");
  joinCreateLobbyDiv.innerHTML = "Create a Lobby or join an existing Lobby to play";
  oppProblemWindowDiv.appendChild(joinCreateLobbyDiv);
}

function createHighscore() {
  const highScoreUserDiv = document.createElement("div");
  const highScoreUserNameDiv = document.createElement("div");
  const highScoreUserCountDiv = document.createElement("div");
  highScoreUserNameDiv.innerText = "test";
  highScoreUserCountDiv.innerText = "5";
  highScoreUserDiv.appendChild(highScoreUserNameDiv);
  highScoreUserDiv.appendChild(highScoreUserCountDiv);
  highScoreDiv.appendChild(highScoreUserDiv);
}