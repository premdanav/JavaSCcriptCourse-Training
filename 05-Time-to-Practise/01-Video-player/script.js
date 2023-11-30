const video = document.querySelector("video");
const progress = document.querySelector("progress");
const play = document.getElementById("play");
const pause = document.getElementById("pause");
const volume = document.getElementById("volume");
const speed = document.querySelectorAll(".speed");
const back = document.querySelectorAll("#back");
const forward = document.querySelectorAll("#forward");

//play video
play.addEventListener("click", () => {
  video.play();
});

//pause video
pause.addEventListener("click", () => {
  video.pause();
});

function togglePlay() {
  if (video.paused) {
    video.play();
    return;
  }
  video.pause();
}

video.addEventListener("click", togglePlay);

document.addEventListener("keydown", (e) => {
  if (e.key === "Space") {
    togglePlay();
  }
});

volume.addEventListener("input", function chagneVolume() {
  video.volume = volume.value;
});

function setSelected(e) {
  video.play();
  video.playbackRate = e.target.getAttribute("data-speed");
}

speed.forEach(function (button) {
  button.addEventListener("click", setSelected);
});

function updateProgress() {
  if (video.currentTime > 0) {
    progress.value = video.currentTime / video.duration;
  }
}

video.addEventListener("timeupdate", updateProgress);

back.addEventListener("click", () => {
  video.currentTime -= 5;
});

forward.addEventListener("click", () => {
  video.currentTime += 5;
});
