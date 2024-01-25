let problemArray = [];
let problemResultArray = [];
let problemCount = 0;
let deletedRows = 0;
let leftRows = 0;
let currentLevel = 0;
let spawnSpeed = 7500;
let IntervalID = 0;
let gameHasStarted = false;
let isPaused = false;

const testarea = document.getElementById("testarea");
const score = document.createElement("div");
const level = document.createElement("div");
const problemsLeft = document.createElement("div");
const scoreDiv = document.getElementById("score-div");
const buttonDiv = document.getElementById("button-div");
const guideDiv = document.getElementById("guide-div");
const guideDiv1 = document.getElementById("guide-div1");
const problemWindowDiv = document.getElementById("problem-window-div");
const gameOverDiv = document.createElement("div");
const levelFinishedDiv = document.createElement("div");
const startDiv = document.createElement("div");
const pauseDiv = document.createElement("div");
const pauseButton = document.createElement("button");

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

function createProblem(problemID) {
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
  let randomBitString = createRandomNumber();
  
  for (let i=0; i<8; i++) {
    let subString = randomBitString.substring(randomBitString.length - (i + 1), randomBitString.length - i);
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
  //fillValueWithString(problemID, valueString);
}

function checkBitInput(problemID, value, result) {
  testarea.innerHTML = "value: " + value + "<br>result: " + result + "<br>";
  if(value == result) {
    deleteProblem(problemID);
    problemCount--;
    leftRows--;
    updateScore();
  }
}

function checkInput(problemID, value, result) {
  testarea.innerHTML = "value: " + value + "<br>result: " + result + "<br>";
  if(value == result) {
    deleteProblem(problemID);
    problemCount--;
    leftRows--;
    updateScore();
  }
}

function levelFinished() {
  levelFinishedDiv.setAttribute("class", "level-finished-div");
  levelFinishedDiv.innerHTML = "Level finished";
  const nextLevelButton = document.createElement("button");
  nextLevelButton.innerText = "Next Level";
  nextLevelButton.setAttribute("onclick", "nextLevel()");
  nextLevelButton.setAttribute("id", "next-level-button");
  levelFinishedDiv.appendChild(nextLevelButton);
  problemWindowDiv.appendChild(levelFinishedDiv);
  console.log("levelFinished")
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
  leftRows = 0;
  currentLevel = 0;
  deletedRows = 0;
  gameHasStarted = false;
  updateScore();
  start();
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
      resumeButton.setAttribute("onclick", "pauseGame()");
      resumeButton.setAttribute("id", "game-over-newgame-button");
      pauseDiv.appendChild(resumeButton);
      problemWindowDiv.appendChild(pauseDiv);
      isPaused = true;
    } else {
      IntervalID = setInterval(function() {
        spawnRandomProblem();
        checkSpawnedProblemCount();
      }, spawnSpeed - (200 * currentLevel))
      pauseButton.innerText = "Pause";
      pauseDiv.remove();
      isPaused = false;
    }
  }
}

function nextLevel() {
  for(let i=0; i < 100; i++) {
    let problems = document.getElementsByClassName("problem-div");
    if(problems != null) {
      for(let i=0; i < problems.length; i++) {
        problems[i].remove();
      }
    } else
    break;
  }
  problemCount = 0;
  currentLevel++;
  leftRows = 15;
  updateScore();
  levelFinishedDiv.remove();
    IntervalID = setInterval(function() {
      spawnRandomProblem();
      checkSpawnedProblemCount();
    }, spawnSpeed - (200 * currentLevel))
}

function startGame() {

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
  gameHasStarted = true;
  currentLevel = 1;
  deletedRows = 0;
  problemCount = 0;
  leftRows = 15;
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
  startGame();
}

function checkSpawnedProblemCount() {
  if(problemCount == 10) {
    clearInterval(IntervalID);
    gameOver();
  }
}

function gameOver() {
  gameOverDiv.setAttribute("class", "game-over-div");
  gameOverDiv.innerHTML = "Game Over";
  const newGameButton = document.createElement("button");
  newGameButton.innerText = "New Game";
  newGameButton.setAttribute("onclick", "newGame()");
  newGameButton.setAttribute("id", "game-over-newgame-button");
  gameOverDiv.appendChild(newGameButton);
  problemWindowDiv.appendChild(gameOverDiv);
  console.log("gameOver");
}

function start() {
  updateScore();
  problemsLeft.innerText = "Lines Left: " + leftRows;
  startDiv.setAttribute("class", "start-div");
  startDiv.innerHTML = "Binary Wars SP";
  const startNewGameButton = document.createElement("button");
  startNewGameButton.innerText = "New Game";
  startNewGameButton.setAttribute("onclick", "newGame()");
  startNewGameButton.setAttribute("id", "start-newgame-button");
  startDiv.appendChild(startNewGameButton);
  problemWindowDiv.appendChild(startDiv);
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

function fillValueWithString(problemID, valueString) {
  let decValue = 0;
  for(let i=0; i < 8; i++) {
    let subString = valueString.substring(valueString.length - (i + 1), valueString.length - i);
    if(subString == "1") {
      decValue += 2 ** i;
    }
  }
  console.log("problemID: " + problemID);
  const problemValueInput = document.getElementById("bit-result-input-id_" + problemID);
  console.log("problemValueInput: " + problemValueInput);
  problemValueInput.setAttribute("value", decValue);
}

function spawnRandomProblem() {
  let number = createRandomNumber();
  let randomNumber = Math.floor(Math.random() * (2 - 0) + 0);

  if (randomNumber == 1) {
    problemArray.push(createDecimalProblem(problemArray.length, number));
  }
  if (randomNumber == 0) {
    problemArray.push(createProblem(problemArray.length));
  }
}

function spawnProblem() {
  problemArray.push(createProblem(problemArray.length));
  // spawnRandomProblem();
}

function spawnDecProblem() {
  let number = createRandomNumber();
  problemArray.push(createDecimalProblem(problemArray.length, number));
  console.log(number);
}

function deleteProblem(problemID) {
  let ProblemDiv = document.getElementById("problem-div-id" + problemID);
  if (ProblemDiv != null) {
    deletedRows++;
    problemResultArray[problemID] = 0;
    ProblemDiv.remove();
  }
}

let bP=0;
function deleteProblemB() {
  let ProblemDiv = document.getElementById("problem-div-id" + bP);
  if (ProblemDiv != null) {
    deletedRows++;
    problemResultArray[bP] = 0;
    ProblemDiv.remove();
  }
  bP++;
  updateScore();
}

function updateScore() {
  score.innerHTML = "Score: " + deletedRows;
  level.innerHTML = "Level: " + currentLevel;
  problemsLeft.innerHTML = "Lines Left: " + leftRows;
  scoreDiv.appendChild(score);
  scoreDiv.appendChild(level);
  scoreDiv.appendChild(problemsLeft);
  if(leftRows == 0 && currentLevel > 0) {
    clearInterval(IntervalID);
    levelFinished(currentLevel);
  }
}

function checkProblemResultArray() {
  for(let i=0; i < problemResultArray.length; i++) {
    console.log(i + ": " + problemResultArray[i]);
  }
}

document.querySelector("div").addEventListener("input", () => {
  const activeInputField = document.activeElement.id;
	var number = document.querySelector('input[id=' + activeInputField + ']').value;
  let problemID = 0;
  console.log(activeInputField);
  problemID = activeInputField.substring(activeInputField.indexOf("_") + 1, activeInputField.length)
  console.log("testproblemID: " + problemID);
  checkInput(problemID, number, problemResultArray[problemID]);
})

pauseButton.setAttribute("class", "info-button");
pauseButton.setAttribute("id", "pause-button");
pauseButton.setAttribute("onclick", "pauseGame()");
pauseButton.innerText = "Pause";
const endGameButton = document.createElement("button");
endGameButton.setAttribute("class", "info-button");
endGameButton.setAttribute("onclick", "stopGame()");
endGameButton.innerText = "End Game";
buttonDiv.appendChild(pauseButton);
buttonDiv.appendChild(endGameButton);
start();