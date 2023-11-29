const marks = [1, 2, 3, 4, 5];
let initialValue = 5;

const res = marks.reduce(findTotal, initialValue);

function findTotal(total, currentValue) {
  return total + currentValue;
}
console.log(res);

const res1 = marks.reduceRight(findTotalInDiffWay, initialValue);

function findTotalInDiffWay(total, currentValue) {
  return total - currentValue;
}
console.log(res1);
