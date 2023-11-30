const dropzones = document.querySelectorAll(".drop");
let selected;
let score = 0;

const startGame = document.querySelector("button");
startGame.style.display = "none";

startGame.addEventListener("click", startNewGame);

function endGame() {
  startGame.style.display = "inline";
}

function startNewGame() {
  window.location.reload();
}

function handleDrop(e) {
  if (document.querySelector(".drag-section").childElementCount) {
    endGame();
  }
  if (e.target.classList.contains(selected.className)) {
    console.log("correct");
    e.target.classList.remove("drop");
    selected.remove();
    score++;
    document.querySelector("#score").innerText = score;
    return;
  }
  score--;
  document.querySelector("#score").innerText = score;
}

dropzones.forEach((ele) => {
  ele.addEventListener("drop", handleDrop);
});

function handleDragStart(e) {
  selected = e.target;
  e.target.style.opacity = 0.5;
}
document.addEventListener("dragstart", handleDragStart);

function handleDragEnd(e) {
  e.target.style.opacity = 1;
}
document.addEventListener("dragend", handleDragEnd);

function allowDrop(e) {
  e.preventDefault();
}
dropzones.forEach((value) => {
  value.addEventListener("dragover", allowDrop);
});
