let res;

let x = parseInt("59");
x = parseInt("59Premkumar");
x = parseInt("prem54");
x = Number("54Prem"); //doesnt parse
x = String("45");
x = String(true); //string

res = x;
console.log(res);
console.log(typeof res);
