const headerImage = document.querySelector("#headerImage");
function changeImage() {
  headerImage.setAttribute("src", "burger2.jpg");
}
headerImage.addEventListener("click", changeImage);

const addButtons = document.querySelectorAll(".add");

addButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    e.stopPropagation();
    console.log(e.currentTarget.parentNode.querySelector("h4").innerText);
    alert(e.currentTarget.parentNode.querySelector("h4").innerText);
  });
});

const recipeTitles = document.querySelectorAll("article");

recipeTitles.forEach((recipe) => {
  recipe.addEventListener(
    "click",
    () => {
      alert(`${recipe.innerText} clicked`);
    },
    { capture: true }
  );
});
