// Type convertion - converting a data type to another data type
// const first = prompt("Enter first number: ");
// const second = prompt("Enter second number: ");
// const total = first + second
// console.log(total);
// console.log(first, second);

//convert fron a string to number - '45.90' --> 45.90
// perseInt, Number
const mystr = '92'
console.log(typeof  mystr);

const converted = parseInt(mystr)
// const converted = Number(mystr);
console.log(typeof converted);
// converting string to number
const mynum = 76;
console.log(typeof mynum);
const converted1 = String(mynum);
console.log(typeof converted1);

const first = "10"
const second = "10"
const total = parseInt(first) + Number(second)
console.log(total);

// Type coercion(force)
const a = "5"
const b = "3"
console.log(a + b);
console.log(a - b );
console.log(a / b);
console.log(a * b);
console.log(a - b - b + b * 2);
// NAN - not a number



