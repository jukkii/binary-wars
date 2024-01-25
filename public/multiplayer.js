let problemArray = [];
let problemResultArray = [];
let problemCount = 0;
let deletedRows = 0;
let OPPdeletedRows = 0;
let spawnSpeed = 15000;
let spawnCount = 1;
let IntervalID = 0;
let gameHasStarted = false;
let isPaused = false;
let isAlive = false;
let isReady = false;
let lobbyInterval;

let audioClipUrls = [];
let lastPlayedIndex = 0;
var ourAudio = document.createElement('audio');

const gameContainer = document.getElementById("game-container");
const gameDiv = document.getElementById("game-div");
const testarea = document.getElementById("testarea");
const ownScore = document.createElement("div");
const ownLevel = document.createElement("div");
const ownProblemsLeft = document.createElement("div");
const opponentScore = document.createElement("div");
const scoreDiv = document.getElementById("score-div");
const score1Div = document.getElementById("score1-div");
const buttonDiv = document.getElementById("button-div");
const guideDiv = document.getElementById("guide-div");
const guideDiv1 = document.getElementById("guide-div1");
const problemWindowDiv = document.getElementById("problem-window-div");
const gameOverDiv = document.createElement("div");
const levelFinishedDiv = document.createElement("div");
const startDiv = document.createElement("div");
const lobbyDiv = document.createElement("div");
const pauseDiv = document.createElement("div");
const pauseButton = document.createElement("button");
const pauseButtonDummy = document.createElement("button");
const lobbyUsersDiv = document.createElement("div");
const lobbyUser = document.createElement("div");

const oppNicknameDiv = document.createElement("div");
const nicknameDiv = document.createElement("div");

const oppProblemWindowDiv = document.getElementById("opp-problem-window-div");
const oppGameDiv = document.getElementById("opp-game-div");
const oppScoreDiv = document.getElementById("opp-score-div");
const oppScore1Div = document.getElementById("opp-score1-div");
const oppButtonDiv = document.getElementById("opp-button-div");
const oppGuideDiv = document.getElementById("opp-guide-div");
const oppGuideDiv1 = document.getElementById("opp-guide-div1");
const waitForPlayerDiv = document.createElement("div");
let OPPbitString;
let OPPproblemMode;
let oppProblemArray = [];
let oppProblemResultArray = [];
let oppProblemCount = 0;

let myChannel;
let myClientId;
let gameRoom;
let players = {};
let totalPlayers = 0;
let winner;
let loser;
const myNickname = localStorage.getItem("nickname");
const myGameRoomCode = localStorage.getItem("roomCode");
const amIHost = localStorage.getItem("isHost");
let isHost = amIHost;
let oppNickname;
let playerInLobby = [];

// connect to Ably
const realtime = new Ably.Realtime({
  authUrl: "/auth",
});


// once connected to Ably, instantiate channels and launch the game
realtime.connection.once("connected", () => {
  myClientId = realtime.auth.clientId;
  gameRoom = realtime.channels.get("game-room");
  deadPlayerCh = realtime.channels.get("dead-player");
  myChannel = realtime.channels.get("clientChannel-" + myClientId);
  gameRoom.presence.enter(myNickname);
  setTimeout(() => {
  myChannel.publish("get-players", {
  });
    lobbyUser.innerHTML = "joining lobby";
  }, 800);
});

realtime.channels.get("game-room").subscribe("game-state", (msg) => {
  players = msg.data.players;
  totalPlayers = msg.data.playerCount;
  if(msg.data.isReady) {
    if(msg.data.id != myClientId) {
      refreshLobby();
    } else {
      refreshLobby();
    }
  }
  if(msg.data.getPlayers) {
    playerInLobby = [];
    for (let player in players) {
      let playerId = players[player].id;
      let nickname = players[player].nickname;
      if(playerId != myClientId) {
        oppNickname = nickname;
      }
      playerInLobby.push(nickname);
    }
    if(nicknameDiv != null) 
      nicknameDiv.remove();
      setNicknames();
      lobbyInterval = setInterval(function () {
      refreshLobby();
      console.log("test1");
    }, 100);
  }
  if (msg.data.leftLobby) {
    playerInLobby = [];
    console.log("msg.data.id: " + msg.data.id);
    delete players[msg.data.id];
    for (let player in players) {
      let playerId = players[player].id;
      let nickname = players[player].nickname;
      if(playerId != myClientId) {
        oppNickname = nickname;
      }
      playerInLobby.push(nickname);
    }
    lobbyInterval = setInterval(function () {
      refreshLobby();
      console.log("test1");
    }, 100);
  }
  if (msg.data.rowSpawned) {
    if(msg.data.id != myClientId) {
      console.log("msg.clientId: " + msg.data.id);
      console.log("myClientId: " + myClientId);
      OPPbitString = msg.data.bitString;
      OPPproblemMode = msg.data.problemMode;
      if(OPPproblemMode == 1) {
        createOppDecimalProblem(oppProblemArray.length, OPPbitString);
      }
      if(OPPproblemMode == 0) {
        createOppProblem(oppProblemArray.length, OPPbitString);
      }
      playSound("/audio/row-spawned.mp3");
      console.log("OPPbitString: " + OPPbitString);
      console.log("OPPproblemMode: " + OPPproblemMode);
    }
  } 
  if (msg.data.gameOn) {
    gameOverDiv.remove();
    waitForPlayerDiv.remove();
    startGame();
    playSound("/audio/game-start.mp3");
    audio();
    checkForInput();
  } 
  if (msg.data.isPaused) {
    pauseGame();
  } 
  if(msg.data.gameOver) {
    winner = myClientId;
    loser = msg.data.loserPlayer;
    gameOver();
  }
  for (let player in players) {
    let playerId = players[player].id;
    let score = players[player].score;
    if(playerId != myClientId) {
      if(score - OPPdeletedRows == 1) {
        spawnRandomProblem();
        checkSpawnedProblemCount();
        console.log("opponent has cleared 1 row");
        deleteOppProblem(msg.data.problemID)
        console.log("msg.data.ProblemID: " + msg.data.problemID);
      }
      OPPdeletedRows = score;
      updateOpponentScore();
    }
  }
});
showLobby();
createOpponentWaitWindow();
updateOpponentScore();
updateScore();

function toggleAudio() {

}

function playSound(soundFile) {
  var ourAudio = new Audio(soundFile);
  ourAudio.loop = false;
  ourAudio.volume = 0.01;
  ourAudio.play();
  ourAudio.onended = function() {
    ourAudio.remove();
  };
}

function audio() {
  let url = "";
  for (let i=0; i<15; i++) {
    url = "/audio/" + i + ".mp3";
    audioClipUrls.push(url);
  }
    ourAudio.src = audioClipUrls[lastPlayedIndex]; // Set resource to our URL
    ourAudio.autoplay = true; // Automatically play sound
    ourAudio.volume = 0.01;
    ourAudio.onended = function() {
      ourAudio.remove(); // Remove when played.
      if(lastPlayedIndex < audioClipUrls.length) {
        lastPlayedIndex++;
        audio();
      }
    };
    gameDiv.appendChild(ourAudio);
    console.log("test");
  }

function createOpponentWaitWindow() {
  gameContainer.appendChild(oppGameDiv);
  oppGameDiv.appendChild(waitForPlayerDiv);
  waitForPlayerDiv.setAttribute("class", "waiting-div");
  waitForPlayerDiv.innerHTML = "Waiting for a Player to connect";
  oppProblemWindowDiv.appendChild(waitForPlayerDiv);
}

function createOpponentConnectedWindow() {
  gameContainer.appendChild(oppGameDiv);
  oppGameDiv.appendChild(waitForPlayerDiv);
  waitForPlayerDiv.setAttribute("class", "opp-connected-div");
  waitForPlayerDiv.innerHTML = "Player<br>" + oppNickname + "<br>is connected";
  oppProblemWindowDiv.appendChild(waitForPlayerDiv);
}

function refreshLobby() {
  console.log(players);
  lobbyUser.remove();
  lobbyUser.innerHTML = "";
  const lobbyUserReadyDiv = document.createElement("div");
  lobbyUserReadyDiv.setAttribute("id", "lobby-users-ready-div");
  if(playerInLobby.length > 1) {
    createOpponentConnectedWindow();
  }
  for (let player in players) {
    console.log("player: " + player);
    let playerName = players[player].nickname;
    let playerIsReady = players[player].isReady;
    let readyString;
    if(playerIsReady) {
      readyString = "ready";
    } else {
      readyString = "not ready";
    }
    lobbyUser.innerHTML = lobbyUser.innerHTML + playerName + " - " + readyString + "<br>";
  }
  // for (let i=0; i < playerInLobby.length; i++) {
  //   console.log("player: " + playerInLobby[i]);
  //   let playerName = playerInLobby[i];
  //   lobbyUser.innerHTML = lobbyUser.innerHTML + playerName + "<br>";
  // }
  lobbyUsersDiv.appendChild(lobbyUser);
  clearInterval(lobbyInterval);
}

showLobby();
function showLobby() {
    localStorage.setItem("isHost", true);
    const lobbyUserStartButton = document.createElement("button");
    const lobbyUserReadyButton = document.createElement("button");
    lobbyUserReadyButton.setAttribute("id", "lobby-users-div-ready-button");
    lobbyUserReadyButton.innerText = "Ready";
    lobbyUserStartButton.innerText = "Start Game";
    lobbyUserStartButton.setAttribute("id", "lobby-users-div-start-button");
    lobbyUserStartButton.setAttribute("onclick", "startGameTrigger()");
    lobbyUserReadyButton.setAttribute("onclick", "readyStatusTrigger()");
    lobbyDiv.setAttribute("class", "lobby-div");
    lobbyUsersDiv.setAttribute("id", "lobby-users-div");
    let roomCode = localStorage.getItem("roomCode");
    lobbyDiv.innerHTML = "Lobby: " + roomCode;
    lobbyDiv.appendChild(lobbyUsersDiv);
    const speedInputDiv = document.createElement("div");
    const spawnCountInputDiv = document.createElement("div");
    speedInputDiv.setAttribute("class", "slider-input-div");
    spawnCountInputDiv.setAttribute("class", "slider-input-div");
    const speedInput = document.createElement("input");
    const spawnCountInput = document.createElement("input");
    speedInput.setAttribute("id", "speedInput");
    speedInput.setAttribute("class", "slider-input");
    speedInput.setAttribute("type", "range");
    speedInput.setAttribute("min", "1");
    speedInput.setAttribute("max", "15");
    speedInput.setAttribute("step", "1");
    speedInput.setAttribute("value", (spawnSpeed/1000));
    spawnCountInput.setAttribute("id", "spawnCountInput");
    spawnCountInput.setAttribute("class", "slider-input");
    spawnCountInput.setAttribute("type", "range");
    spawnCountInput.setAttribute("min", "0");
    spawnCountInput.setAttribute("max", "3");
    spawnCountInput.setAttribute("step", "1");
    spawnCountInput.setAttribute("value", (spawnCount));
    const speedOutputValueDiv = document.createElement("div");
    const sCountOutputValueDiv = document.createElement("div");
    speedOutputValueDiv.innerHTML = (spawnSpeed/1000);
    sCountOutputValueDiv.innerHTML = (spawnCount);
    speedOutputValueDiv.setAttribute("class", "output-value-div")
    sCountOutputValueDiv.setAttribute("class", "output-value-div")
    speedInputDiv.innerHTML = "Speed: ";
    speedInputDiv.appendChild(speedInput);
    spawnCountInputDiv.innerHTML = "Spawns: ";
    spawnCountInputDiv.appendChild(spawnCountInput);
    if(amIHost == "true")
    {
      speedInput.addEventListener ("input", function () {
        speedOutputValueDiv.innerHTML = this.value;
      });
      spawnCountInput.addEventListener ("input", function () {
        sCountOutputValueDiv.innerHTML = this.value;
      });
      speedInputDiv.appendChild(speedOutputValueDiv);
      lobbyDiv.appendChild(speedInputDiv);
      spawnCountInputDiv.appendChild(sCountOutputValueDiv);
      lobbyDiv.appendChild(spawnCountInputDiv);
    }
    lobbyDiv.appendChild(lobbyUserReadyButton);
    if(amIHost == "true")
    {
      lobbyDiv.appendChild(lobbyUserStartButton);
    }
    problemWindowDiv.appendChild(lobbyDiv);
  }

  function startGameTrigger() {
    console.log("startButtonPushed");
    let playerCount = 0;
    let readyCount = 0;
    for (let player in players) {
      playerCount++;
      if(players[player].isReady)
        readyCount++;
    }
    console.log("playerCount: " + playerCount + "readyCount: " + readyCount);
    if(readyCount == playerCount) {
      myChannel.publish("start-game", {
      });
    }
    else {
      console.log("not all Players are ready");
    }
  }
  function reStartGameTrigger() {
    console.log("restartButtonPushed");
    myChannel.publish("restart-game", {
    });
  }
  function readyStatusTrigger() {
    if(!isReady) {
      isReady = true;
      console.log("readyStatusTriggered: " + isReady);
      myChannel.publish("toggle-ready", {
        isReady
      });
    } else {
      isReady = false;
      console.log("readyStatusTriggered: " + isReady);
      myChannel.publish("toggle-ready", {
        isReady
      });
    }
  }


function createRandomNumber() {
    let randomBitString = "";
    for (let i=0; i < 8; i++) {
      let randomBit = Math.floor(Math.random() * (2 - 0) + 0);
      randomBitString += randomBit;
    }
    return randomBitString;
}

createGuide(guideDiv);
createGuide(guideDiv1);
createGuide(oppGuideDiv);
createGuide(oppGuideDiv1);

function createGuide(guideDivV) {
  //create guide
  const guide = document.createElement("div");
  guide.setAttribute("class", "guide-container");

  //create guide buttons
  const guide_bits = document.createElement("div");
  guide_bits.setAttribute("class", "guide-bits-div");
  for (let i=0; i<8; i++) {
    const guide_bit_button = document.createElement("button");
    guide_bit_button.innerText = 2 ** (7 - i);
    guide_bit_button.setAttribute("class", "guide-bit-button");
    guide_bit_button.setAttribute("disabled", "true");
    guide_bits.appendChild(guide_bit_button);
  }
  guide.appendChild(guide_bits);
  guideDivV.appendChild(guide);
}


function createOppDecimalProblem(oppProblemID, OPPbitString) {
  //create problem
  const opp_problem = document.createElement("div");
  opp_problem.setAttribute("class", "opp-problem-div");
  opp_problem.setAttribute("height", "28px");
  opp_problem.setAttribute("id", "opp-problem-div-id" + oppProblemResultArray.length);

  //create bit buttons
  const opp_problem_bits = document.createElement("div");
  opp_problem_bits.setAttribute("class", "opp-problem-bits-div");
  let oppDecValue = 0;
  for (let i=0; i<8; i++) {
    
    const opp_bit_button = document.createElement("button");
    opp_bit_button.innerText = 0;
    opp_bit_button.setAttribute("id", "opp-bit-button-id" + i + "pID_" + oppProblemID);
    let subString = OPPbitString.substring(OPPbitString.length - (i + 1), OPPbitString.length - i);
    if(subString == "1")
    oppDecValue += 2 ** i;   
    let subString1 = OPPbitString.substring(OPPbitString.length - (OPPbitString.length - i), OPPbitString.length - (OPPbitString.length - i) + 1);
    if(subString1 == "1") {
      opp_bit_button.setAttribute("class", "bit-button-on");
      opp_bit_button.innerHTML = 1;
    } else
    opp_bit_button.setAttribute("class", "bit-button"); 
    opp_bit_button.setAttribute("disabled", "true");
    opp_problem_bits.appendChild(opp_bit_button);
  }
  const opp_bit_equal = document.createElement("div");
  opp_bit_equal.innerHTML = "="
  opp_bit_equal.setAttribute("class", "bit-equal");
  opp_problem_bits.appendChild(opp_bit_equal);

  const opp_bit_result = document.createElement("div");
  const opp_bit_result_input = document.createElement("input");
  opp_bit_result.appendChild(opp_bit_result_input);
  opp_bit_result.setAttribute("class", "bit-result");
  opp_bit_result_input.setAttribute("class", "bit-result-input");
  opp_bit_result_input.setAttribute("placeholder", "?");
  opp_bit_result_input.setAttribute("maxlength", "3");
  opp_bit_result_input.setAttribute("id", "bit-result-input-id_" + oppProblemResultArray.length);
  opp_problem_bits.appendChild(opp_bit_result);

  oppProblemResultArray.push(oppDecValue);

  opp_problem.appendChild(opp_problem_bits);

  const opp_problem_result = document.createElement("div");


  oppProblemWindowDiv.appendChild(opp_problem);
  oppProblemCount++;

}

function createDecimalProblem(problemID, randomBitString) {

  //create problem
  const problem = document.createElement("div");
  problem.setAttribute("class", "problem-div");
  problem.setAttribute("height", "28px");
  problem.setAttribute("id", "problem-div-id" + problemResultArray.length);

  //create bit buttons
  const problem_bits = document.createElement("div");
  problem_bits.setAttribute("class", "problem-bits-div");
  let decValue = 0;
  for (let i=0; i<8; i++) {
    
    const bit_button = document.createElement("button");
    bit_button.innerText = 0;
    bit_button.setAttribute("onclick", "changeBitStatus(this.id)");
    bit_button.setAttribute("id", "bit-button-id" + i + "pID_" + problemID);
    let subString = randomBitString.substring(randomBitString.length - (i + 1), randomBitString.length - i);
    if(subString == "1")
      decValue += 2 ** i;   
    let subString1 = randomBitString.substring(randomBitString.length - (randomBitString.length - i), randomBitString.length - (randomBitString.length - i) + 1);
    if(subString1 == "1") {
      bit_button.setAttribute("class", "bit-button-on");
      bit_button.innerHTML = 1;
    } else
      bit_button.setAttribute("class", "bit-button"); 
    bit_button.setAttribute("disabled", "true");
    problem_bits.appendChild(bit_button);
  }
  const bit_equal = document.createElement("div");
  bit_equal.innerHTML = "="
  bit_equal.setAttribute("class", "bit-equal");
  problem_bits.appendChild(bit_equal);

  const bit_result = document.createElement("div");
  const bit_result_input = document.createElement("input");
  bit_result.appendChild(bit_result_input);
  bit_result.setAttribute("class", "bit-result");
  bit_result_input.setAttribute("class", "bit-result-input");
  bit_result_input.setAttribute("placeholder", "?");
  bit_result_input.setAttribute("maxlength", "3");
  bit_result_input.setAttribute("id", "bit-result-input-id_" + problemResultArray.length);
  problem_bits.appendChild(bit_result);

  problemResultArray.push(decValue);

  problem.appendChild(problem_bits);

  const problem_result = document.createElement("div");


  problemWindowDiv.appendChild(problem);
  problemCount++;
}

function createOppProblem(oppProblemID, OPPbitString) {
  let oppProblemWindowDiv = document.getElementById("opp-problem-window-div");

  //create problem
  const opp_problem = document.createElement("div");
  opp_problem.setAttribute("class", "opp-problem-div");
  opp_problem.setAttribute("id", "opp-problem-div-id" + oppProblemResultArray.length);

  //create bit buttons
  const opp_problem_bits = document.createElement("div");
  opp_problem_bits.setAttribute("class", "opp-problem-bits-div");

  for (let i=0; i<8; i++) {
    const opp_bit_button = document.createElement("button");
    opp_bit_button.innerText = 0;
    opp_bit_button.setAttribute("class", "bit-button");
    opp_bit_button.setAttribute("id", "bit-button-id" + i + "pID_" + oppProblemID);
    opp_problem_bits.appendChild(opp_bit_button);
  }
  const opp_bit_equal = document.createElement("div");
  opp_bit_equal.innerHTML = "="
  opp_bit_equal.setAttribute("class", "bit-equal");
  opp_problem_bits.appendChild(opp_bit_equal);

  const opp_bit_result = document.createElement("div");
  const opp_bit_result_input = document.createElement("input");
  opp_bit_result.appendChild(opp_bit_result_input);
  opp_bit_result.setAttribute("class", "bit-result");
  
  let oppDecValue = 0;
  
  for (let i=0; i<8; i++) {
    let subString = OPPbitString.substring(OPPbitString.length - (i + 1), OPPbitString.length - i);
    if(subString == "1")
    oppDecValue += 2 ** i; 
  }
    
  opp_bit_result_input.setAttribute("value", oppDecValue);
  opp_bit_result_input.setAttribute("class", "bit-result-input");
  opp_bit_result_input.setAttribute("disabled", "true");
  opp_bit_result_input.setAttribute("maxlength", "3");
  opp_bit_result_input.setAttribute("id", "bit-result-input-id_" + oppProblemResultArray.length);
  opp_problem_bits.appendChild(opp_bit_result);

  oppProblemResultArray.push(oppDecValue);

  opp_problem.appendChild(opp_problem_bits);

  const opp_problem_result = document.createElement("div");


  oppProblemWindowDiv.appendChild(opp_problem);
  oppProblemCount++;
}

function createProblem(problemID, number) {
  let problemWindowDiv = document.getElementById("problem-window-div");

  //create problem
  const problem = document.createElement("div");
  problem.setAttribute("class", "problem-div");
  problem.setAttribute("id", "problem-div-id" + problemResultArray.length);

  //create bit buttons
  const problem_bits = document.createElement("div");
  problem_bits.setAttribute("class", "problem-bits-div");

  for (let i=0; i<8; i++) {
    const bit_button = document.createElement("button");
    bit_button.innerText = 0;
    bit_button.setAttribute("class", "bit-button");
    bit_button.setAttribute("onclick", "changeBitStatus(this.id)");
    bit_button.setAttribute("id", "bit-button-id" + i + "pID_" + problemID);
    problem_bits.appendChild(bit_button);
  }
  const bit_equal = document.createElement("div");
  bit_equal.innerHTML = "="
  bit_equal.setAttribute("class", "bit-equal");
  problem_bits.appendChild(bit_equal);

  const bit_result = document.createElement("div");
  const bit_result_input = document.createElement("input");
  bit_result.appendChild(bit_result_input);
  bit_result.setAttribute("class", "bit-result");
  
  let decValue = 0;
  
  for (let i=0; i<8; i++) {
    let subString = number.substring(number.length - (i + 1), number.length - i);
    if(subString == "1")
      decValue += 2 ** i; 
  }
    
  bit_result_input.setAttribute("value", decValue);
  bit_result_input.setAttribute("class", "bit-result-input");
  bit_result_input.setAttribute("disabled", "true");
  bit_result_input.setAttribute("maxlength", "3");
  bit_result_input.setAttribute("id", "bit-result-input-id_" + problemResultArray.length);
  problem_bits.appendChild(bit_result);

  problemResultArray.push(decValue);

  problem.appendChild(problem_bits);

  const problem_result = document.createElement("div");


  problemWindowDiv.appendChild(problem);
  problemCount++;
}

function changeBitStatus(id) {
  let problemID = 0;
  let button = document.getElementById(id);
  let test = button.getAttribute("class");
  if(test == "bit-button") {
    button.innerHTML = 1;
    button.setAttribute("class", "bit-button-on")
  } else {
    button.innerHTML = 0;
    button.setAttribute("class", "bit-button")
  }
  console.log("changeBitStatusID: " + id);
  
  problemID = id.substring(id.indexOf("_") + 1, id.length)
  let valueString = checkActiveBits(problemID);
  let b = parseInt(valueString, 2).toString(10);
  checkBitInput(problemID, b, problemResultArray[problemID]);
}

function checkBitInput(problemID, value, result) {
  testarea.innerHTML = "value: " + value + "<br>result: " + result + "<br>";
  if(value == result) {
    problemCount--;
    deleteProblem(problemID);
    updateScore();
  }
}

function checkInput(problemID, value, result) {
  testarea.innerHTML = "value: " + value + "<br>result: " + result + "<br>";
  if(value == result) {
    problemCount--;
    deleteProblem(problemID);
    updateScore();
  }
}

function stopGame() {
  for(let i=0; i < 100; i++) {
    let problems = document.getElementsByClassName("problem-div");
    if(problems != null) {
      for(let i=0; i < problems.length; i++) {
        problems[i].remove();
      }
    } else
    break;
  }
  clearInterval(IntervalID);
  pauseDiv.remove();
  gameOverDiv.remove();
  levelFinishedDiv.remove();
  deletedRows = 0;
  gameHasStarted = false;
  updateScore();
  start();
  myChannel.publish("left-lobby", {
  });
  window.location.replace("/");
}

function pauseGameTrigger() {
  myChannel.publish("pause-game", {
  });
}

function pauseGame() {
  if(gameHasStarted) {
    if(!isPaused) {
      clearInterval(IntervalID);
      pauseButton.innerText = "Resume";
      pauseDiv.setAttribute("class", "game-over-div");
      pauseDiv.innerHTML = "Paused";
      const resumeButton = document.createElement("button");
      resumeButton.innerText = "Resume";
      resumeButton.setAttribute("onclick", "pauseGameTrigger()");
      resumeButton.setAttribute("id", "game-over-newgame-button");
      pauseDiv.appendChild(resumeButton);
      problemWindowDiv.appendChild(pauseDiv);
      isPaused = true;
    } else {
      IntervalID = setInterval(function() {
        spawnRandomProblem();
        checkSpawnedProblemCount();
      }, spawnSpeed)
      pauseButton.innerText = "Pause";
      pauseDiv.remove();
      isPaused = false;
    }
  }
}

function startGame() {
lobbyDiv.remove();
gameOverDiv.remove();
console.log("hä");
  for(let i=0; i < 100; i++) {
    let problems = document.getElementsByClassName("problem-div");
    if(problems != null) {
      for(let i=0; i < problems.length; i++) {
        problems[i].remove();
      }
    } else
    break;
  }
  problemResultArray = [];
  problemArray = [];
  isAlive = true;
  gameHasStarted = true;
  problemCount = 0;
  updateScore();
  spawnRandomProblem();
    IntervalID = setInterval(function() {
      spawnRandomProblem();
      checkSpawnedProblemCount();
    }, spawnSpeed)
}

function newGame() {
  startDiv.remove();
  gameOverDiv.remove();
  lobbyDiv.remove();
  startGame();
}

function checkSpawnedProblemCount() {
  if(problemCount == 10) {
    gameOverTrigger();
  }
}

function gameOverTrigger() {
  isAlive = false;
  myChannel.publish("game-over", {
    isAlive
  });
}

function gameOver() {
  clearInterval(IntervalID);
  gameOverDiv.setAttribute("class", "game-over-div");
  const newGameButton = document.createElement("button");
  newGameButton.innerText = "Restart";
  newGameButton.setAttribute("onclick", "reStartGameTrigger()");
  newGameButton.setAttribute("id", "game-over-newgame-button");

  if(isAlive) {
    gameOverDiv.innerHTML = "You Won";
  } else {
    gameOverDiv.innerHTML = "You Lost";
  }

  if(amIHost == "true") {
    gameOverDiv.appendChild(newGameButton);
  }
  problemWindowDiv.appendChild(gameOverDiv);
  console.log("gameOver");
}

function start() {
  updateScore();
}

function checkActiveBits(problemID) {
  let valueString = "";
  for (let i=0; i<8; i++) {
    const bit_button = document.getElementById("bit-button-id" + i + "pID_" + problemID);
    let test = bit_button.getAttribute("class");
    if(test == "bit-button-on") {
      valueString += "1";
    }
    if(test == "bit-button") {
      valueString += "0";
    }
  }
  return valueString;
}

function spawnRandomProblem() {
  let number = createRandomNumber();
  let randomNumber = Math.floor(Math.random() * (2 - 0) + 0);

  if (randomNumber == 1) {
    problemArray.push(createDecimalProblem(problemArray.length, number));
    
    myChannel.publish("row-spawned", {
      problemMode: randomNumber,
      bitString: number,
    });
  }
  if (randomNumber == 0) {
    problemArray.push(createProblem(problemArray.length, number));
    myChannel.publish("row-spawned", {
      problemMode: randomNumber,
      bitString: number,
    });
  }
}

function spawnDecProblem() {
  let number = createRandomNumber();
  problemArray.push(createDecimalProblem(problemArray.length, number));
  console.log(number);
}

function deleteOppProblem(oppProblemID) {
  let oppProblemDiv = document.getElementById("opp-problem-div-id" + oppProblemID);
  if (oppProblemDiv != null) {
    oppProblemResultArray[oppProblemID] = 0;
    console.log("oppRowCleared");
    oppProblemDiv.remove();
  }
}

function deleteProblem(problemID) {
  let ProblemDiv = document.getElementById("problem-div-id" + problemID);
  if (ProblemDiv != null) {
    deletedRows++;
    problemResultArray[problemID] = 0;
    console.log("rowCleared");
    playSound("/audio/row-cleared.mp3");
    myChannel.publish("row-cleared", {
      deletedRows,
      problemID,
    });
    ProblemDiv.remove();
  }
}

function setNicknames() {
  nicknameDiv.innerHTML = myNickname;
  scoreDiv.appendChild(nicknameDiv);
  if(oppNickname == undefined) 
    oppNickname = "not connected"
  oppNicknameDiv.innerHTML = oppNickname;
  oppScoreDiv.appendChild(oppNicknameDiv);
}

function updateScore() {
  ownScore.innerHTML = "Score: " + deletedRows + "<br>";
  score1Div.appendChild(ownScore);
}

function updateOpponentScore() {
  opponentScore.innerHTML = "Score: " + OPPdeletedRows + "<br>";
  oppScore1Div.appendChild(opponentScore);
}

function checkProblemResultArray() {
  for(let i=0; i < problemResultArray.length; i++) {
    console.log(i + ": " + problemResultArray[i]);
  }
}


function checkForInput() {
  if(gameHasStarted) {
    console.log("test");
    document.querySelector("div").addEventListener("input", () => {
      const activeInputField = document.activeElement.id;
      var number = document.querySelector('input[id=' + activeInputField + ']').value;
      let problemID = 0;
      console.log(activeInputField);
      problemID = activeInputField.substring(activeInputField.indexOf("_") + 1, activeInputField.length)
      console.log("testproblemID: " + problemID);
      checkInput(problemID, number, problemResultArray[problemID]);
    })
  } else
  console.log("test1");
}

pauseButton.setAttribute("class", "info-button");
pauseButton.setAttribute("id", "pause-button");
pauseButton.setAttribute("onclick", "pauseGameTrigger()");
pauseButton.innerText = "Pause";
const endGameButton = document.createElement("button");
endGameButton.setAttribute("class", "info-button");
endGameButton.setAttribute("onclick", "stopGame()");
endGameButton.innerText = "End Game";
buttonDiv.appendChild(pauseButton);
buttonDiv.appendChild(endGameButton);
start();