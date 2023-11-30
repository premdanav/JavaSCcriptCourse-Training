function price(value, currency = "$") {
  return `${value}${currency}`;
}

console.log(price(50, "%"));

function avg(rest, ...age) {
  return rest + age;
}

console.log(avg(5, 6, 7, 8));
