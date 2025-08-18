// ARRAYS -element
// [el1, el2, el3]
const students = ["pius", "Dada", "Daniel", "Moshood", "Emmanuel"];
// array properties
//length
console.log(students);
console.log(students.length);
//get element based on position
console.log(students[3]);
console.log(students[students.length - 1]);
//change eleement in an array by using the position
students[0] = "Zach";
students[3] = "Emma";
console.log(students);

//array methods - add or remove element to/from an array (add-push-end, unshift-start)(pop-end, shift-start)
//structured datatype
console.log(students.push("Ola"));
students.push("Blessing");
students.unshift("Ade");
students.pop(); //end 
students.shift();// front
console.log(students);

//at, indexOf, lastIndexOf
const nums = ["a", "c", "a", "d", "f", "a", "c"];
console.log(nums.at(0));
console.log(nums.indexOf("c"));
console.log(nums.lastIndexOf("c"));

//includes
console.log(nums.includes("a"));

// extracting portions from arrey
// slice (start ,end (non-inclusive))
console.log(nums.slice(0,3));

// contact 
console.log(students.concat(["jane", "peter"]));

// conversion to a sring- tosring ,join(seperator)
console.log(students.toString());
console.log(nums.toString());
console.log(nums.join("-"));
//[] empty array
console.log(Array.isArray(7));
console.log(Array.from("abc"));

// reverse 
const grades =[1,2,3]
console.log(grades);
console.log(grades.reverse());

// complex array methods
// higher array methods - because they take anoyher function to tell them what to do 
// foreach, map, find, sort, filter, every, some, reduce

 const transactions = [100, -200, 3000, -2500, 600];
 const users = ["ade", "john", "peter", "ayo"];
 // forEach- loop through this array- perform an action
 transactions.forEach((transaction) => {
   console.log(transaction * 2);
 });
 users.forEach((user)=>{
    console.log(user.toUpperCase());
    
 });

 // map - loop through this array- perform an action and returns the new array
 const letterFromUsers = users.map((user) => user.charAt(0))
 console.log(letterFromUsers);
 
const newTransactions = transactions.map((transaction) => transaction / 10)
console.log(newTransactions);

//find and filter
// find returns the first element that passes a serch condition 
const bestUser = users.find((user) => user.startsWith("a"))
console.log(bestUser);
const greaterThan500 = transactions.find ((transaction) => transaction > 500)
console.log(greaterThan500);

// filter - returns every element that passes a search condition
const aUsers = users.filter((user) => user.startsWith("a"))
console.log(aUsers);

const debitTransactions = transactions.filter((transaction) => transaction < 0) 
console.log(debitTransactions);

// sort - arrange elements in an array
console.log(users.sort());
/// when using sort with numbers we need to compare funcstions
const specialNumbers = [11, 2, 3, 4, 10, 15]
const LowTohigh = specialNumbers.sort((a, b) => a - b)
console.log(LowTohigh);

const highToLow = specialNumbers.sort((a, b) => b - a);
console.log(highToLow);

// every some and reduce
const allGreaterThan10 = specialNumbers.every((num) => num > 10)
console.log(allGreaterThan10);
const someGreaterThan10 = specialNumbers.some((num) => num > 10)
console.log(someGreaterThan10);

// reduce - accumulates values in an array into one (number)
const carPrice = [100, 75, 20, 89]
// a - accumulator b- current value
const totalPrice = carPrice.reduce((a, b) => {
    return a + b
}, 10)
console.log(totalPrice);
// split
let myName = "Banana is healthy"
console.log(myName.split(""));



