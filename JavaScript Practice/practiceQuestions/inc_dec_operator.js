let a = 5;
let b = 10;

let c = a++ + --b;
const d = c-- - ++a + b++;

console.log(a, b, c, d);