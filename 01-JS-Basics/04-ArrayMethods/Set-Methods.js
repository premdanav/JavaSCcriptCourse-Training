const arr = [5, 10, 15, 5];

let uniqueNumbers = new Set(arr);

// Adding values to the Set
uniqueNumbers.add(5); // Adding a duplicate value, but it won't be added

console.log("Set after adding values:", uniqueNumbers);

// Checking if a value exists in the Set
console.log("Is 10 in the set?", uniqueNumbers.has(10));
console.log("Is 20 in the set?", uniqueNumbers.has(20));

// Getting the size (number of elements) of the Set
console.log("Size of the set:", uniqueNumbers.size);

// Deleting a value from the Set
uniqueNumbers.delete(10);
console.log("Set after deleting 10:", uniqueNumbers);

// Iterating through the Set
console.log("Iterating through the set:");
for (let number of uniqueNumbers) {
  console.log(number);
}

// Clearing all values from the Set
uniqueNumbers.clear();
console.log("Set after clearing:", uniqueNumbers);
