let problemArray = [];
let problemResultArray = [];
let problemCount = 0;
let deletedRows = 0;
let leftRows = 0;
let currentLevel = 0;
let spawnSpeed = 10000;
let IntervalID = 0;
let gameHasStarted = false;
let isPaused = false;

let audioClipUrls = [];
let lastPlayedIndex = 0;
var ourMusic = document.createElement('audio');
let musicIsPaused = false;
const musicPlayStopButton = document.createElement("button");
const audioPlayerDiv = document.createElement("div");
let volume = 0.01;
let volumeDivToggled = false;

const gameDiv = document.getElementById("game-div");
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
const spawnProblemDiv = document.createElement("div");

let highScoreNickname = "no name";
let highScoreChannel;
let highScoreSP = {};
const highScoreDiv = document.getElementById("highscoreSP-div");
const highScoreNicknameSubmitButton = document.createElement("button");
const highScoreNicknameInput = document.createElement("input");

const realtime = new Ably.Realtime({
    authUrl: "/auth"
});

realtime.connect();
realtime.connection.on("connected", () => {
    console.log("connected to ably");
    myClientId = realtime.auth.clientId;
    highScoreChannel = realtime.channels.get("highScore");
    highScoreChannel.presence.enter({
    });
    highScoreChannel.subscribe("highScore", (msg) => {
        if (msg.data.getHighScoreSP) {
            highScoreSP = {};
            highScoreDiv.innerHTML = "Highscore:<br><br>";
            highScoreSP = msg.data.highScoreSP;
            for (let user in highScoreSP) {
                let newHighScoreUserDiv = document.createElement("div");
                let newHighScoreUserNameDiv = document.createElement("div");
                let newHighScoreUserCountDiv = document.createElement("div");
                newHighScoreUserDiv.setAttribute("class", "highscore-user-div");
                newHighScoreUserCountDiv.setAttribute("class", "highscore-user-count-div");
                newHighScoreUserNameDiv.innerText = highScoreSP[user].nickname;
                newHighScoreUserCountDiv.innerText = highScoreSP[user].score;
                newHighScoreUserDiv.appendChild(newHighScoreUserNameDiv);
                newHighScoreUserDiv.appendChild(newHighScoreUserCountDiv);
                highScoreDiv.appendChild(newHighScoreUserDiv);
            }
        }
    });

    setTimeout(() => {
        highScoreChannel.publish("get-highScoreSP", {
        });
        console.log("get-highScoreSP send");
    }, 5);
});

function writeHighScoreSPToDB() {
    highScoreNicknameSubmitButton.setAttribute("disabled", true);
    highScoreChannel.publish("publish-highScoreSP", {
        score: deletedRows,
        nickname: highScoreNickname,
        level: currentLevel
    });
}
function showSingleplayer() {
    window.location.replace("/singleplayer");
}

function showMultiplayer() {
    window.location.replace("/multiplayer");
}


function playSound(soundFile) {
    var ourAudio = new Audio(soundFile);
    ourAudio.loop = false;
    ourAudio.volume = volume;
    ourAudio.play();
    ourAudio.onended = function () {
        ourAudio.remove();
    };
}

function startMusic() {
    let url = "";
    audioClipUrls = [];
    for (let i = 0; i < 13; i++) {
        url = "/audio/music/" + i + ".mp3";
        audioClipUrls.push(url);
    }
    console.log("audioClip: " + audioClipUrls[lastPlayedIndex]);
    ourMusic.src = audioClipUrls[lastPlayedIndex];
    ourMusic.autoplay = true;
    ourMusic.volume = volume;
    ourMusic.onended = function () {
        if (lastPlayedIndex < audioClipUrls.length) {
            lastPlayedIndex++;
            musicIsPaused = false;
            startMusic();
        }
    };
    //      gameDiv.appendChild(ourMusic);
}

function togglePlayStopMusic() {
    if (ourMusic.paused) {
        musicPlayStopButton.innerHTML = "&#9208;";
        document.getElementById("playStopButton").innerHTML = "&#9208;";
        ourMusic.play();
    } else {
        musicPlayStopButton.innerHTML = "&#9205;";
        document.getElementById("playStopButton").innerHTML = "&#9205;";
        ourMusic.pause();
    }
}

function previousAudioClip() {
    if (lastPlayedIndex == 0) {
        lastPlayedIndex = audioClipUrls.length - 1;
        ourMusic.src = audioClipUrls[lastPlayedIndex];
        ourMusic.play();
    } else {
        lastPlayedIndex--;
        ourMusic.src = audioClipUrls[lastPlayedIndex];
        ourMusic.play();
    }
}

function nextAudioClip() {
    if (lastPlayedIndex == audioClipUrls.length - 1) {
        lastPlayedIndex = 0;
        ourMusic.src = audioClipUrls[lastPlayedIndex];
        ourMusic.play();
    } else {
        lastPlayedIndex++;
        ourMusic.src = audioClipUrls[lastPlayedIndex];
        ourMusic.play();
    }
}

function changeAudioVolume() {
    const volumeDiv = document.createElement("div");
    volumeDiv.setAttribute("id", "volume-div");
    const volumeInput = document.createElement("input");
    if (volumeDivToggled) {
        let test = document.getElementById("volume-div");
        test.remove();
        volumeInput.remove();
        volumeDivToggled = false;
    } else {
        volumeInput.setAttribute("id", "volumeInput");
        volumeInput.setAttribute("class", "volume-input");
        volumeInput.setAttribute("type", "range");
        volumeInput.setAttribute("min", "0");
        volumeInput.setAttribute("max", "1");
        volumeInput.setAttribute("step", "0.01");
        volumeInput.setAttribute("value", (volume));
        volumeDiv.appendChild(volumeInput);
        audioPlayerDiv.appendChild(volumeDiv);
        volumeInput.addEventListener("input", function () {
            volume = this.value;
            console.log("volume: " + volume);
            ourMusic.volume = volume;
        });
        volumeDivToggled = true;
    }
}






function createRandomNumber() {
    let randomBitString = "";
    for (let i = 0; i < 8; i++) {
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
    for (let i = 0; i < 8; i++) {
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
    for (let i = 0; i < 8; i++) {

        const bit_button = document.createElement("button");
        bit_button.innerText = 0;
        bit_button.setAttribute("onclick", "changeBitStatus(this.id)");
        bit_button.setAttribute("id", "bit-button-id" + i + "pID_" + problemID);
        let subString = randomBitString.substring(randomBitString.length - (i + 1), randomBitString.length - i);
        if (subString == "1")
            decValue += 2 ** i;
        let subString1 = randomBitString.substring(randomBitString.length - (randomBitString.length - i), randomBitString.length - (randomBitString.length - i) + 1);
        if (subString1 == "1") {
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

    for (let i = 0; i < 8; i++) {
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

    for (let i = 0; i < 8; i++) {
        let subString = randomBitString.substring(randomBitString.length - (i + 1), randomBitString.length - i);
        if (subString == "1")
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
    if (test == "bit-button") {
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
    if (value == result) {
        deleteProblem(problemID);
        problemCount--;
        leftRows--;
        updateScore();
        checkSpawnedProblemCount();

    }
}

function checkInput(problemID, value, result) {
    if (value == result) {
        deleteProblem(problemID);
        problemCount--;
        leftRows--;
        updateScore();
        checkSpawnedProblemCount();
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
    for (let i = 0; i < 100; i++) {
        let problems = document.getElementsByClassName("problem-div");
        if (problems != null) {
            for (let i = 0; i < problems.length; i++) {
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
    if (gameHasStarted) {
        if (!isPaused) {
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
            IntervalID = setInterval(function () {
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
    for (let i = 0; i < 100; i++) {
        let problems = document.getElementsByClassName("problem-div");
        if (problems != null) {
            for (let i = 0; i < problems.length; i++) {
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
    spawnRandomProblem();
    IntervalID = setInterval(function () {
        spawnRandomProblem();
        checkSpawnedProblemCount();
    }, spawnSpeed - (200 * currentLevel))
}

function startGame() {

    for (let i = 0; i < 100; i++) {
        let problems = document.getElementsByClassName("problem-div");
        if (problems != null) {
            for (let i = 0; i < problems.length; i++) {
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
    IntervalID = setInterval(function () {
        spawnRandomProblem();
        checkSpawnedProblemCount();
    }, spawnSpeed);
}

function newGame() {
    highScoreChannel.publish("get-highScoreSP", {
    });;
    startMusic();
    startDiv.remove();
    highScoreNicknameSubmitButton.removeAttribute("disabled");
    gameOverDiv.remove();
    startGame();
    checkForInput();
}


function checkSpawnedProblemCount() {
    if (problemCount == 10) {
        clearInterval(IntervalID);
        gameOver();
    }
    if (problemCount == 0) {
        spawnRandomProblemButton();
    }
}

function spawnRandomProblemButton() {

    //create problem
    spawnProblemDiv.innerHTML = "";
    spawnProblemDiv.setAttribute("id", "spawn-problem-div");

    const spawnButton = document.createElement("button");
    spawnButton.innerHTML = "New Row";
    spawnButton.setAttribute("id", "spawn-button");
    spawnButton.setAttribute("onclick", "spawnRandomProblem()");

    spawnProblemDiv.appendChild(spawnButton);
    problemWindowDiv.appendChild(spawnProblemDiv);
}

function gameOver() {
    gameOverDiv.setAttribute("class", "game-over-div");
    gameOverDiv.innerHTML = "Game Over";
    const newGameButton = document.createElement("button");
    newGameButton.innerText = "New Game";
    newGameButton.setAttribute("onclick", "newGame()");
    newGameButton.setAttribute("id", "game-over-newgame-button");

    if (deletedRows > highScoreSP[0].score) {
        gameOverDiv.innerHTML = "Game Over<br>New Highscore!";
        highScoreNicknameInput.setAttribute("class", "highscore-nickname-input");
        highScoreNicknameInput.setAttribute("id", "highscore-nickname-input");
        highScoreNicknameInput.setAttribute("max-length", "20");

        highScoreNicknameSubmitButton.setAttribute("class", "highscore-nickname-button");
        highScoreNicknameSubmitButton.setAttribute("onclick", "writeHighScoreSPToDB()");
        highScoreNicknameSubmitButton.innerHTML = "Submit to Highscore";
        highScoreNicknameInput.addEventListener("input", function () {
            highScoreNickname = this.value;
        });

        gameOverDiv.appendChild(highScoreNicknameInput);
        gameOverDiv.appendChild(highScoreNicknameSubmitButton);

    }
    gameOverDiv.appendChild(newGameButton);
    problemWindowDiv.appendChild(gameOverDiv);
    console.log("gameOver");
}

function start() {
    console.log("staaaart");
    pauseButton.setAttribute("class", "info-button");
    pauseButton.setAttribute("id", "pause-button");
    pauseButton.setAttribute("onclick", "pauseGame()");
    pauseButton.innerText = "Pause";
    const endGameButton = document.createElement("button");
    endGameButton.setAttribute("class", "info-button");
    endGameButton.setAttribute("onclick", "stopGame()");
    endGameButton.innerText = "End Game";
    problemsLeft.innerText = "Lines Left: " + leftRows;
    startDiv.setAttribute("class", "start-div");
    startDiv.innerHTML = "Binary Wars SP";
    const startNewGameButton = document.createElement("button");
    startNewGameButton.innerText = "New Game";
    startNewGameButton.setAttribute("onclick", "newGame()");
    startNewGameButton.setAttribute("id", "start-newgame-button");
    startDiv.appendChild(startNewGameButton);
    problemWindowDiv.appendChild(startDiv);

    audioPlayerDiv.setAttribute("id", "audio-player-div");
    const musicPreviousButton = document.createElement("button");
    musicPreviousButton.setAttribute("onclick", "previousAudioClip()");
    musicPreviousButton.innerHTML = "&#9198;";
    const musicNextButton = document.createElement("button");
    musicNextButton.setAttribute("onclick", "nextAudioClip()");
    musicNextButton.innerHTML = "&#9197;";
    const musicVolumeButton = document.createElement("button");
    musicPlayStopButton.setAttribute("onclick", "togglePlayStopMusic()");
    musicPlayStopButton.setAttribute("id", "playStopButton");
    musicPlayStopButton.innerHTML = "&#9205;";
    musicVolumeButton.innerHTML = "&#128266;";
    musicVolumeButton.setAttribute("onclick", "changeAudioVolume()");
    audioPlayerDiv.appendChild(musicPreviousButton);
    audioPlayerDiv.appendChild(musicPlayStopButton);
    audioPlayerDiv.appendChild(musicNextButton);
    audioPlayerDiv.appendChild(musicVolumeButton);
    audioPlayerDiv.innerHTML = audioPlayerDiv.innerHTML + "<br>";
    buttonDiv.appendChild(audioPlayerDiv);
    buttonDiv.appendChild(pauseButton);
    buttonDiv.appendChild(endGameButton);

    updateScore();

}

function checkActiveBits(problemID) {
    let valueString = "";
    for (let i = 0; i < 8; i++) {
        const bit_button = document.getElementById("bit-button-id" + i + "pID_" + problemID);
        let test = bit_button.getAttribute("class");
        if (test == "bit-button-on") {
            valueString += "1";
        }
        if (test == "bit-button") {
            valueString += "0";
        }
    }
    return valueString;
}

function fillValueWithString(problemID, valueString) {
    let decValue = 0;
    for (let i = 0; i < 8; i++) {
        let subString = valueString.substring(valueString.length - (i + 1), valueString.length - i);
        if (subString == "1") {
            decValue += 2 ** i;
        }
    }
    console.log("problemID: " + problemID);
    const problemValueInput = document.getElementById("bit-result-input-id_" + problemID);
    console.log("problemValueInput: " + problemValueInput);
    problemValueInput.setAttribute("value", decValue);
}

function spawnRandomProblem() {
    spawnProblemDiv.remove();
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
        checkSpawnedProblemCount();
    }
}

let bP = 0;
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
    if (leftRows == 0 && currentLevel > 0) {
        clearInterval(IntervalID);
        levelFinished(currentLevel);
    }
}

function checkProblemResultArray() {
    for (let i = 0; i < problemResultArray.length; i++) {
        console.log(i + ": " + problemResultArray[i]);
    }
}

function checkForInput() {
    document.querySelector("div").addEventListener("input", () => {
        const activeInputField = document.activeElement.id;
        var number = document.querySelector('input[id=' + activeInputField + ']').value;
        let problemID = 0;
        console.log(activeInputField);
        problemID = activeInputField.substring(activeInputField.indexOf("_") + 1, activeInputField.length)
        console.log("testproblemID: " + problemID);
        checkInput(problemID, number, problemResultArray[problemID]);
    });
}


start();