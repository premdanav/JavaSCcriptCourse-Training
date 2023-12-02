let images = [
  "carousel/images/beach.jpg",
  "carousel/images/elephants.jpg",
  "carousel/images/grass.jpg",
  "carousel/images/lake.jpg",
  "carousel/images/town.jpg",
];

const wrapper = document.querySelector("#carousel");

function setImages() {
  wrapper.innerHTML = "";

  const smallImageWrapper = document.createElement("div");
  smallImageWrapper.id = "smallImageWrapper";

  images.forEach(function (imageSrc) {
    let ele = document.createElement("img");
    ele.src = imageSrc;
    if (!wrapper.hasChildNodes()) {
      ele.classList.add("large", "carousel");
    } else {
      ele.classList.add("small", "carousel");
      smallImageWrapper.appendChild(ele);
      ele = smallImageWrapper;
    }
    wrapper.appendChild(ele);
  });

  setArrows();
}

function reOrder(e) {
  let newArr = [];
  const direction = e.target.id;

  images.forEach((image, index) => {
    if (direction === "left") {
      if (index === 0) {
        newArr[images.length] = image;
        newArr.shift();
      } else {
        newArr[index - 1] = image;
      }
    } else {
      newArr[index + 1] = image;
      if (index + 1 === images.length) {
        newArr[0] = image;
        newArr.pop();
      }
    }
  });
  images = newArr;
  setImages();
}

function setArrows() {
  const leftArrow = document.createElement("span");
  leftArrow.innerHTML = "&#8249";
  leftArrow.id = "left";
  leftArrow.addEventListener("click", reOrder);

  const rightArrow = document.createElement("span");
  rightArrow.innerHTML = "&#8250";
  rightArrow.id = "right";
  rightArrow.addEventListener("click", reOrder);
  const smallImageWrapper = document.querySelector("#smallImageWrapper");
  smallImageWrapper.appendChild(rightArrow);
  smallImageWrapper.prepend(leftArrow);
}
setImages();
