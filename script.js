// selectionner les elements html
const roll_dice = document.querySelector(".roll");
const dices = document.querySelectorAll(".dice");
const score_p1 = document.querySelector(".myScore-p0");
const score_p2 = document.querySelector(".myScore-p1");
const hold = document.querySelector(".hold");

// declaration des variable necéssaire
let resultat_current = 0;
let global = [0, 0];
let playerEnCours = "0";
let enCour = true;
// // caché le dé
document.querySelector(".deImg").style.display = "none";
// lancé le dé
roll_dice.addEventListener("click", () => {
  if (enCour) {
    document.querySelector(".deImg").style.display = "inline-block";
    var rand = Math.floor(Math.random() * 6) + 1;
    dices.forEach((dice) => {
      dice.classList.remove("active");
    });
    dices[rand - 1].classList.add("active");
    if (rand !== 1) {
      resultat_current += rand;
      document.querySelector(".current-score" + playerEnCours).textContent =
        resultat_current;
    } else if (rand === 1) {
      playerNext();
    }
  }
});

// function de nouveau joueur
function playerNext() {
  playerEnCours =
    playerEnCours === "0" ? (playerEnCours = "1") : (playerEnCours = "0");

  // document.querySelector(".deImg").style.display ="none"

  document.querySelector(".current-score0").textContent = "0";
  document.querySelector(".current-score1").textContent = "0";
  resultat_current = 0;
  document.querySelector(".player0").classList.toggle("done");
  document.querySelector(".player1").classList.toggle("done");

  document.querySelector(".points0").classList.toggle("invalid");
  document.querySelector(".points1").classList.toggle("invalid");
}

// envoyer le score obtenue dans current au score globale
hold.addEventListener("click", () => {
  global[playerEnCours] += resultat_current;
  console.log(global[playerEnCours]);
  document.querySelector(".myScore-p" + playerEnCours).textContent =
    global[playerEnCours];
  document.querySelector(".current-score" + playerEnCours).textContent = "0";
  resultat_current = 0;
  document.querySelector(".deImg").style.display = "none";

  if (global[playerEnCours] >= 100) {
    enCour = false;
    document.querySelector(".myScore-p" + playerEnCours).textContent = "100";
    document.querySelector(".title" + playerEnCours).textContent = "WINNER!";
    document.querySelector(".title" + playerEnCours).style.color = "#EB4D4D";
    document.querySelector(".current-score0").textContent = "0";
    document.querySelector(".current-score1").textContent = "0";
  } else {
    playerNext();
  }
});

// lancer une nouvelle partie
document.querySelector(".new-game").addEventListener("click", () => {
  enCour = true;
  global = [0, 0];
  playerEnCours = "0";
  resultat_current = 0;
  document.querySelector(".deImg").style.display = "none";
  document.querySelector(".myScore-p0").textContent = "0";
  document.querySelector(".myScore-p1").textContent = "0";
  document.querySelector(".current-score0").textContent = "0";
  document.querySelector(".current-score1").textContent = "0";
  document.querySelector(".title0").textContent = "PLAYER 1";
  document.querySelector(".title1").textContent = "PLAYER 2";
  document.querySelector(".title0").style.color = "#333";
  document.querySelector(".title1").style.color = "#333";
  document.querySelector(".player1").classList.remove("done");
  document.querySelector(".player0").classList.add("done");
  document.querySelector(".points0").classList.remove("invalid");
  document.querySelector(".points1").classList.add("invalid");
});
