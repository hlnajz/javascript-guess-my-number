"use strict";
let numAttempts = 0;
let maxAttempts = 4;
let mysteryNumber = "";

function generateNumber() {
  mysteryNumber = "";
  let digits = [];
  for (let i = 0; i < 4; i++) {
    let digit = Math.floor(Math.random() * 9) + 1;
    while (digits.includes(digit)) {
      digit = Math.floor(Math.random() * 9) + 1;
    }
    digits.push(digit);
    mysteryNumber += digit;
  }
  // you can take a look at console to cheat
  console.log("Mystery Number: " + mysteryNumber);
}
function checkGuess() {
  let guess = document.getElementById("guessUser").value;
  let result = "";
  if (guess.length != 4) {
    document.querySelector(".resGame").textContent =
      "Please enter a 4-digit number.";
    return;
  }
  numAttempts++;
  if (numAttempts > maxAttempts) {
    document.querySelector(".resGame").textContent =
      "You have used all your attempts. The mystery number was " +
      mysteryNumber +
      ".";
    resetGame();
    return;
  }
  for (let i = 0; i < guess.length; i++) {
    if (guess[i] == mysteryNumber[i]) {
      result += "C";
    } else if (mysteryNumber.includes(guess[i])) {
      result += "W";
    } else {
      result += "F";
    }
  }
  console.log("Guess: " + guess + ", Result: " + result);
  if (result == "VVVV") {
    document.querySelector(".resGame").textContent =
      "Congratulations, you won!";
    resetGame();
    return;
  }
  document.getElementById("resultGame").innerHTML +=
    "<br> Attempt #" + numAttempts + ": " + guess + " - " + result;
  document.getElementById("guessUser").value = "";
}

function resetGame() {
  numAttempts = 0;
  mysteryNumber = "";
  document.getElementById("guessUser").value = "";
  document.getElementById("resultGame").textContent = "";
  generateNumber();
}
function restartGame() {
  numAttempts = 0;
  mysteryNumber = "";
  document.getElementById("resultGame").textContent = "";
  generateNumber();
}
generateNumber();
