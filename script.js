"use strict";
//Selecting elements

let playing = true;
const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");
const score0El = document.querySelector("#score--0");
const score1El = document.getElementById("score--1");
const currentscoreE0 = document.getElementById("current--0");
const currentscoreEl = document.getElementById("current--1");
const diceEl = document.querySelector(".dice");
const btnroll = document.querySelector(".btn--roll");
const btnnew = document.querySelector(".btn--new");
const btnhold = document.querySelector(".btn--hold");

const switchplayer = function () {
  currentscore = 0;
  document.getElementById(`current--${activeplayer}`).textContent =
    currentscore;
  if (activeplayer == 0) {
    player0El.classList.toggle("player--active");
    player1El.classList.toggle("player--active");
    activeplayer = 1;
    currentscore = 0;
  } else if (activeplayer == 1) {
    activeplayer = 0;
    player0El.classList.toggle("player--active");
    player1El.classList.toggle("player--active");
  }
};

let scores,currentplayer,currentscore,activeplayer;
//Initial conditions
const init = function () {
  score0El.textContent = 0;
  
  score1El.textContent = 0;
  diceEl.classList.add("hidden");

  scores = [0, 0];
  currentscore = 0;
  currentplayer = 0;
  activeplayer = 0;
  score0El.textContent = 0;
  score1El.textContent = 0;
  diceEl.classList.add("hidden");
  currentscoreE0.textContent = 0;
  currentscoreEl.textContent = 0;
  player0El.classList.remove("player--winner");
  player1El.classList.remove("player--winner");
  player0El.classList.add("player--active");
  player1El.classList.remove("player--active");
};
init();
//Rolling dice

const rolldice=function () {
  if (playing) {
    const dice = Math.trunc(Math.random() * 6) + 1;

    //display dice
    diceEl.classList.remove("hidden");
    diceEl.src = `resources/dice-${dice}.png`;
    //check for rolled one
    if (dice !== 1) {
      currentscore += dice;
      document.getElementById(`current--${activeplayer}`).textContent =
        currentscore;
    } else if (dice == 1) {
      // Switching the player and making the current score 0
      switchplayer();
    }
  }
};

btnroll.addEventListener("click", rolldice)
btnnew.addEventListener("click", init);

btnhold.addEventListener("click", function () {
  // console.log("BUTTON PRESSED");
  if (playing) {
    scores[activeplayer] += currentscore;
    document.getElementById(`score--${activeplayer}`).textContent =
      scores[activeplayer];

    if (scores[activeplayer] >= 50) {
      playing = false;
      diceEl.classList.add("hidden");
      document
        .querySelector(`.player--${activeplayer}`)
        .classList.add("player--winner");
      document
        .querySelector(`.player--${activeplayer}`)
        .classList.remove("player--active");
        btnnew.addEventListener("click",init);
        btnroll.addEventListener("click",rolldice);
        

    } else switchplayer();
  }
});
