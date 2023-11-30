// Dynamic object creation using ES2015 syntax
let dynamicKey = "color";
let dynamicValue = "red";
let newKey = "color2";
let newColor = "green";
let dynamicObject = {
  [dynamicKey]: dynamicValue,
  [newKey]: newColor,
};

console.log(dynamicObject); // Output: { color: 'red' }
