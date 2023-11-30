//first uncomment from html
const ul = document.getElementById("ul");
const ul2 = document.getElementById("ul2");
function User(firstName = "a", lastName = "b", address = "c") {
  this.firstName = firstName;
  this.lastName = lastName;
  this.address = address;
}

User.prototype.fullName = function () {
  return this.firstName + " " + this.lastName;
};
const userInstance = new User("John", "Doe", "123 Main St");

for (const key in userInstance) {
  if (userInstance.hasOwnProperty(key)) {
    const li = document.createElement("li");
    const text = document.createTextNode(`${key}: ${userInstance[key]}`);
    li.appendChild(text);
    ul.appendChild(li);
  }
}

for (const [key, value] of Object.entries(userInstance)) {
  const li = document.createElement("li");
  const text = document.createTextNode(`${key}: ${value}`);
  li.appendChild(text);
  ul2.appendChild(li);
}
