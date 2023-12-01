//first uncomment from html
// Source object
let sourceObject = {
  prop1: "value1",
  prop2: "value2",
};

let copyHereOBj = {
  prop1: "value-cp-1",
  prop2: "value-cp-2",
  prop3: "value-cp-3",
  prop4: "value-cp-4",
};

// Using Object.assign() to copy properties to a new object
let destinationObject = Object.assign({}, copyHereOBj, sourceObject); //{} will ensure that it wont modify target obj
//destinationObject = Object.assign(copyHereOBj, sourceObject); //here copyHereObj Will get  modufuiy

console.log(sourceObject); //{prop1: "value1",prop2: "value2",}
console.log(destinationObject); // {prop1: 'value1', prop2: 'value2', prop3: 'value-cp-1', prop4: 'value-cp-2'}
console.log(copyHereOBj); //modified obj having  modified property of prop1 and prop2

//using object spread operator
//destinationObject = { ...sourceObject, ...copyHereOBj };
//console.log(destinationObject);
