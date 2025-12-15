const homePointsDisplay = document.getElementById("home-points");
const homePointsOne = document.getElementById("home-point-1");
const homePointsTwo = document.getElementById("home-point-2");
const homePointsThree = document.getElementById("home-point-3");

const homeFoulsDisplay = document.getElementById("home-fouls-current");
const homeFoulsOne = document.getElementById("home-fouls-1");
const homeFoulsReset = document.getElementById("home-fouls-reset");

// -------------------------- */

const awayPointsDisplay = document.getElementById("away-points");
const awayPointsOne = document.getElementById("away-point-1");
const awayPointsTwo = document.getElementById("away-point-2");
const awayPointsThree = document.getElementById("away-point-3");

const awayFoulsDisplay = document.getElementById("away-fouls-current");
const awayFoulsOne = document.getElementById("away-fouls-1");
const awayFoulsReset = document.getElementById("away-fouls-reset");

/* -------------------------- */

/*

// Home +1 point
homePointsOne.addEventListener("click", () => {
  const currentText = homePointsDisplay.innerText;

  const currentNumber = Number(currentText);

  const newNumber = currentNumber + 1;

  homePointsDisplay.innerText = newNumber;
});

// Home +2 point
homePointsTwo.addEventListener("click", () => {
  const currentText = homePointsDisplay.innerText;

  const currentNumber = Number(currentText);

  const newNumber = currentNumber + 2;

  homePointsDisplay.innerText = newNumber;
});

// Home +3 point
homePointsThree.addEventListener("click", () => {
  const currentText = homePointsDisplay.innerText;

  const currentNumber = Number(currentText);

  const newNumber = currentNumber + 3;

  homePointsDisplay.innerText = newNumber;
});
*/

// DRY Function -- Home Team Score Buttons and Display
function updateScore(displayElement, pointsToAdd) {
  const currentNumber = Number(displayElement.innerText);
  const newNumber = currentNumber + pointsToAdd;
  displayElement.innerText = newNumber;
}

homePointsOne.addEventListener("click", () =>
  updateScore(homePointsDisplay, 1)
);
homePointsTwo.addEventListener("click", () =>
  updateScore(homePointsDisplay, 2)
);
homePointsThree.addEventListener("click", () =>
  updateScore(homePointsDisplay, 3)
);

// DRY Function -- Away Team Score Buttons and Display
function updateScore(displayElement, pointsToAdd) {
  const currentNumber = Number(displayElement.innerText);
  const newNumber = currentNumber + pointsToAdd;
  displayElement.innerText = newNumber;
}

awayPointsOne.addEventListener("click", () =>
  updateScore(awayPointsDisplay, 1)
);
awayPointsTwo.addEventListener("click", () =>
  updateScore(awayPointsDisplay, 2)
);
awayPointsThree.addEventListener("click", () =>
  updateScore(awayPointsDisplay, 3)
);
