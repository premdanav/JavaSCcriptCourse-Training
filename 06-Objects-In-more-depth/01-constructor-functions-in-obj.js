//template literal method
let user = {
  firstName: "prem",
  lastName: "danav",
  hobbies: [1, 2, 3, 4],
  address: {
    stree: 5,
    city: "wani",
  },
};

//obje constructor method
user = new Object();
user.firstName = "sumit";
user.lastName = "danav";
user.hobbies = [1, 2, 3, 4, 5];
user.address = {
  street: 6,
  city: "wani",
};

//obj constructor func method
function User(firstName = "a", lastName = "b", address = "c") {
  this.firstName = firstName;
  this.lastName = lastName;
  this.address = address;
  //   this.fullName = function fullName() {
  //     return this.firstName + " " + this.lastName;
  //   };
}

const user1 = new User("PREM", "DANAV", "WANI");
const user2 = new User("PREM2", "DANAV2", "WANI2");
const user3 = new User();

User.prototype.fullName = function () {
  return this.firstName + " " + this.lastName;
};

console.log(user1);
console.log(user2);
console.log(user3);
console.log(user3.fullName());
