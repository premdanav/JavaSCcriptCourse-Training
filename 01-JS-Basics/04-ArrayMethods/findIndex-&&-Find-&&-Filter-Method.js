// Sample array of objects
const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
  { id: 4, name: "David" },
];

// Using findIndex to find the index of an element based on a condition
const indexToFind = users.findIndex((user) => user.name === "Charlie");
console.log("Index of Charlie:", indexToFind);

// Using find to get the first element that satisfies a condition
const userToFind = users.find((user) => user.id === 2);
console.log("User with ID 2:", userToFind);

//Using filter to get an array of elements that satisfy a condition
const filteredUsers = users.filter((user) => user.name.length > 4);
console.log("Users with names longer than 4 characters:", filteredUsers);
