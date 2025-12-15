const homePointsDisplay = document.getElementById("home-points");
const homePointsOne = document.getElementById("home-point-1");
const homePointsTwo = document.getElementById("home-point-2");
const homePointsThree = document.getElementById("home-point-3");

const homeFoulsDisplay = document.getElementById("home-fouls-current");
const homeFoulsOne = document.getElementById("home-fouls-1");
const homeFoulsReset = document.getElementById("home-fouls-reset");

/* ========================== */

homePointsOne.addEventListener("click", () => {
  const currentText = homePointsDisplay.innerText;

  const currentNumber = Number(currentText);

  const newNumber = currentNumber + 1;

  homePointsDisplay.innerText = newNumber;
});
