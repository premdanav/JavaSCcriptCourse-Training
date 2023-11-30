// first uncomment from html
// CSS Style Object
let styleObject = {
  color: "blue",
  fontSize: "16px",
  fontWeight: "bold",
};

// Applying styles to an HTML element
let element = document.getElementById("exampleElement");
Object.assign(element.style, styleObject);
