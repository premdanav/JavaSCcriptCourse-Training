// Sample array
const colors = ["red", "green", "blue"];

// Destructuring assignment
const [firstColor, secondColor, thirdColor] = colors;

// Printing the destructured values
console.log("Destructured colors:");
console.log("First Color:", firstColor);
console.log("Second Color:", secondColor);
console.log("Third Color:", thirdColor);

// Swapping values using destructuring
let a = 1;
let b = 2;

console.log("\nBefore Swap:");
console.log("a:", a);
console.log("b:", b);

[a, b] = [b, a];

console.log("\nAfter Swap:");
console.log("a:", a);
console.log("b:", b);

// Sample array
const colors1 = ["red", "green", "blue", "yellow"];

// Array destructuring
const [firstColor1, secondColor1, ...remainingColors] = colors1;

// Using destructured variables
console.log("First color:", firstColor1);
console.log("Second color:", secondColor1);
console.log("Remaining colors:", remainingColors);
