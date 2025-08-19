// Math methods 
// pow, min, max, round, ceil, floor, trunc, random
console.log(Math.PI);
console.log(Math.pow(3, 2)); // exponential
console.log(Math.min(23, 4, 2, -98)); // minimum number set
console.log(Math.max(-23, -4, -2, -98)); // maximum number set
// ceil(round up), floor(round down), trunc (removes)
console.log(Math.round(7.55)); // normal rounding
console.log(Math.ceil(91.2)); // round up
console.log(Math.floor(9.99)); // round down
console.log(Math.trunc(10.23)); // removes the dp

// random - generates psuedorandom numbers between 0-1 
console.log(Math.random());
// 0-10
console.log(Math.trunc(Math.random() * 11));
// 1-10
const randomNumber = Math.floor(Math.random() * 20) +1;
console.log(randomNumber);

const customers = ["Ola", "Blessing", "Pius", "Moshood", "Season", "Samuel"]
const randomLuckyNumber = Math.floor(Math.random() * customers.length)
console.log(customers[randomLuckyNumber]);
const min = 5
const max = 10
const rNum = Math.floor(Math.random() * (max - min + 1)) + min
console.log(rNum);






