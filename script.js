let winMsg = "Victory";
let loseMsg = "Crushing Defeat";
let tieMsg = "Tie";
let statusDisplay = document.querySelector("#status-head");
let moveDisplays = document.querySelectorAll(".move-display h2");
let buttons = document.querySelectorAll("button");

let moveList = ["Rock", "Paper", "Scissors"];

function calcResult(move1, move2) {
  var result = move1 - move2;

  if (result == 1 || result + 3 == 1) {
    return winMsg;
  } else if (result == 2 || result + 3 == 2) {
    return loseMsg;
  } else {
    return tieMsg;
  }
}

function randomMove() {
  return Math.floor(Math.random() * 3);
}

/**
 * Displays start state of game
 */

function startGame() {
  statusDisplay.textContent = "Choose!";
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].textContent = moveList[i];
    buttons[i].style.display = "inline-block";
    buttons[i].addEventListener("click", endGame);
  }
  moveDisplays.forEach((moveDisplay) => (moveDisplay.style.display = "none"));
}

/**
 * Displays end state of game
 * @param {Event} event event containing information of users input.
 */

function endGame(event) {
  let playerMove = moveList.indexOf(event.target.textContent);
  let computerMove = randomMove();

  statusDisplay.textContent = calcResult(playerMove, computerMove);

  moveDisplays.forEach(
    (moveDisplay) => (moveDisplay.style.display = "inline-block")
  );
  moveDisplays[0].textContent = `You played ${moveList[playerMove]}`;
  moveDisplays[1].textContent = `Computer played ${moveList[computerMove]}`;

  buttons.forEach((button, index) => {
    if (index == 1) {
      button.textContent = "Play Again";
      button.removeEventListener("click", endGame);
      button.addEventListener("click", startGame);
    } else {
      button.style.display = "none";
    }
  });
}

startGame();
