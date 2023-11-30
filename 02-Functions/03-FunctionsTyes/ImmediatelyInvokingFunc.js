let x = (function add(n1, n2) {
  return n1 > n2;
})(5, 4);

(function (name) {
  console.log("hello " + name);
})("prem");

console.log(x);
