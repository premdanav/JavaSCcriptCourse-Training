// Sample array of numbers
const numbers = [1, 2, 3, 4, 5];

// Using forEach to iterate and print each element
console.log("Using forEach:");
numbers.forEach((number) => {
  console.log(number);
});

// Using map to create a new array by doubling each element
const doubledNumbers = numbers.map((number) => number * 2);
console.log("\nUsing map to double each number:", doubledNumbers);

// Using map and filter together to create a new array with only even numbers doubled
const doubledEvenNumbers = numbers
  .filter((number) => number % 2 === 0) // filter even numbers
  .map((evenNumber) => evenNumber * 2); // double each even number

console.log(
  "\nUsing map and filter together to double even numbers:",
  doubledEvenNumbers
);
