const add = document.querySelector("#add");
const cancel = document.querySelector("#cancel");
const output = document.querySelector("p");

function increase() {
  output.innerText = +output.innerText + 1;
}

add.addEventListener("click", increase);

cancel.addEventListener("click", () => {
  add.removeEventListener("click", increase);
});
