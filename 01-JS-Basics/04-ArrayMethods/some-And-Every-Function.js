const roles = ["author", "admin", "subscriber"];

//some()

const canPublish = roles.some((role) => role === "admin" || role === "author");
console.log(canPublish); //true

let marks = [99, 100, 55, 89];

const isThereAnyoneWhoIsAboveAvg = marks.some((mark) => mark > 80); //true
const areAllStudentAboveAvg = marks.every((mark) => mark > 80); //false
console.log(isThereAnyoneWhoIsAboveAvg);
console.log(areAllStudentAboveAvg);
