"use strict";
const secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  if (!guess) {
    document.querySelector(".message").textContent = "📍Not a number";
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent =
      "👍This is a correct number";
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";

    document.querySelector(".winning").play();
    document.querySelector(".highscore").textContent = score;
    document.querySelector(".number").textContent = secretNumber;
    // /Lost the game/;
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "🍺Too High";
      document.querySelector(".bark").play();
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "❌You Lost the Game❌";
      document.querySelector(".score").textContent = 0;
      document.querySelector(".bgsound").pause();
    }
  } else {
    if (score > 1) {
      document.querySelector(".message").textContent = "🐭 Too Low";
      score--;
      document.querySelector(".score").textContent = score;
      document.querySelector(".bark").play();
    } else {
      document.querySelector(".message").textContent = "❌You Lost the Game❌";
      document.querySelector(".score").textContent = 0;
    }
  }
});

// Again (reset button)

document.querySelector(".again").addEventListener("click", function () {
  document.querySelector(".guess").value = "";
  document.querySelector(".number").textContent = "";
  window.location.reload();
});
var audioClass = document.querySelector(".bgsound");

document.querySelector(".play-pause").addEventListener("click", function () {
  if (audioClass.paused) {
    audioClass.play();
    document.querySelector(".play-pause").textContent = "PAUSE";
  } else {
    audioClass.pause();
    document.querySelector(".play-pause").textContent = "PLAY";
  }
});
