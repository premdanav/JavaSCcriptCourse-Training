let score = 0;

function updateScore() {
  score++;
  console.log(score);
  let bonus = 10;
  if (bonus) {
    console.log(bonus++);
  }
  (function bonusAdd() {
    let bonus2 = 30;
    console.log(bonus + score);
  })();
}
updateScore();
