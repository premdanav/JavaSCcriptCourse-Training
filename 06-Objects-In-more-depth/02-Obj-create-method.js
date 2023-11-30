//first uncomment from html
// Parent object
let parentObject = {
  name: "prem",
  surname: "danav",
};

let child = Object.create(parentObject);

console.log(child); //empty obj but provides properties in prototype
console.log(child.name);

function User(firstName, lastName, address) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.address = address;
}

function Character(firstName, lastName, address, show) {
  User.call(this, firstName, lastName, address);
  this.show = show;
}

const chris = new User("prem", "danav", "wani");

const homer = new Character("sumit", "danav", "yavatmal", "rider");

console.log(homer);
console.log(homer instanceof Character);
console.log(homer instanceof User);
