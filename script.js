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

const quarterButtons = document.querySelectorAll(".quarter-buttons button");

/* -------------------------- */

const displayTime = document.querySelector(".display-time span");
const startBtn = document.getElementById("start-button");
const stopBtn = document.getElementById("stop-button");

// Timer variables
let timeRemaining = 600; // 10 minutes in seconds
let timerInterval = null; // will store the interval ID

/* ========================== */

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

// --- DRY Function -- Home/Away Team Score Buttons and Display ---
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

awayPointsOne.addEventListener("click", () =>
  updateScore(awayPointsDisplay, 1)
);
awayPointsTwo.addEventListener("click", () =>
  updateScore(awayPointsDisplay, 2)
);
awayPointsThree.addEventListener("click", () =>
  updateScore(awayPointsDisplay, 3)
);

// --- Home Fouls ---
homeFoulsOne.addEventListener("click", () => {
  const currentFoulCount = Number(homeFoulsDisplay.innerText);

  if (currentFoulCount < 5) {
    homeFoulsDisplay.innerText = currentFoulCount + 1;
  }
});

// --- Home Fouls Reset ---
homeFoulsReset.addEventListener("click", () => {
  homeFoulsDisplay.innerText = 0;
});

// --- Away Fouls ---
awayFoulsOne.addEventListener("click", () => {
  const currentFoulCount = Number(awayFoulsDisplay.innerText);

  if (currentFoulCount < 5) {
    awayFoulsDisplay.innerText = currentFoulCount + 1;
  }
});

// --- Away Fouls Reset ---
awayFoulsReset.addEventListener("click", () => {
  awayFoulsDisplay.innerText = 0;
});

// --- Quarter Selection ---
quarterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // remove 'active' from all buttons
    quarterButtons.forEach((btn) => {
      btn.classList.remove("active");
    });
    // add 'active' to clicked button
    button.classList.add("active");
  });
});

// --- Timer ---
function formatTime(totalSeconds) {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  const formattedMinutes = minutes < 10 ? "0" + minutes : minutes;
  const formattedSeconds = seconds < 10 ? "0" + seconds : seconds;

  // Return as string like "10:00"
  return `${formattedMinutes}:${formattedSeconds}`;
}

formatTime(600);

function countdown() {
  // decrease time by 1 sec
  timeRemaining--;

  // format time and display
  displayTime.innerText = formatTime(timeRemaining);

  // check if timer reached 0
  if (timeRemaining <= 0) {
    clearInterval(timerInterval);
    timerInterval = null;
    timeRemaining = 600;
    displayTime.innerText = formatTime(600); // Shows "10:00" immediately
  }
}

startBtn.addEventListener("click", () => {
  // only start if timer isn't already running
  if (timerInterval === null) {
    timerInterval = setInterval(countdown, 1000);
  }
});

stopBtn.addEventListener("click", () => {
  clearInterval(timerInterval);
  timerInterval = null;
});
