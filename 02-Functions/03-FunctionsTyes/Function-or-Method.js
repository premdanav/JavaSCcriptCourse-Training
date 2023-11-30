//this is function
function greet(name) {
  console.log(`Hello, ${name}!`);
}

greet("John"); // Output: Hello, John!

//this is method -we call some function a method when it is in the context of object
let person = {
  name: "Alice",
  greet: function () {
    console.log(`Hello, ${this.name}!`);
  },
};

person.greet(); // Output: Hello, Alice!
