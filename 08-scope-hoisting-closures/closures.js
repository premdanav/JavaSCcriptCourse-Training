function outer() {
  let outerVar = "outer";

  function inner() {
    let innerVar = "inner";
    console.log(innerVar);
    console.log(outerVar);
  }
  return inner;
}
const x = outer();
console.log(x.outerVar); //undefined

//closure
function updateScore() {
  let score = 0;
  function increase() {
    score++;
    console.log(score);
  }
  return increase;
}

const newScore = updateScore();
newScore(); //1
newScore(); //2
