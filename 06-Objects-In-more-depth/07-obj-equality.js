function areObjectsEqual(obj1, obj2) {
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (let key of keys1) {
    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }

  return true;
}

const objA = { a: 1, b: 2 };
const objB = { a: 1, b: 2 };

console.log(areObjectsEqual(objA, objB)); // Output: true
console.log(JSON.stringify(objA) === JSON.stringify(objB)); //output true