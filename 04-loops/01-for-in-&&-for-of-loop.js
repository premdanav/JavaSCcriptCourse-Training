const obj = { a: 1, b: 2, c: 3 };

for (const key in obj) {
  console.log(key); // Outputs: a, b, c
  console.log(obj[key]); // Outputs: 1, 2, 3
}

const arr = [1, 2, 3];

for (const value of arr) {
  console.log(value); // Outputs: 1, 2, 3
}
