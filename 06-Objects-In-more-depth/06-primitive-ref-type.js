let x = "prem";
let newX = x;
newX = "danav";

console.log(x); //this will stay same
console.log(newX);

const user = {
  name: "sumit",
  surname: "danav",
};

const user2 = user;
user.address = "wani";

console.log(user); //here ref type hence added the new prop address
console.log(user2);
