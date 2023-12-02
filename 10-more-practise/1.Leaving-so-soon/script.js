function leftWindow(e) {
  if (e.clientY < 20) {
    document.querySelector("#exit-popup").style.display = "flex";
    document.removeEventListener("mouseout", leftWindow);
  }
}

setTimeout(() => {
  document.addEventListener("mouseout", leftWindow);
}, 3000);

function closePopup() {
  document.querySelector("#exit-popup").style.display = "none";
}

const closeBtn = document.querySelector("span");

closeBtn.addEventListener("click", closePopup);
