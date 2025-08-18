
// js functions
// reuseble blocks of code that performs a specific task or returns a value
// call or invoked the function
// a function that welcomes our user when they log in 
function welcomeuser() {
    console.log("Welcome User");
} 
// call a function
welcomeuser();
welcomeuser();

// functions with parameters - values that are passed to functions 
function welcomeuser2(user) {
    console.log(`Welcome ${user}`);
}
welcomeuser2 ("Season")
welcomeuser2("Daniel");

// default parameters
function welcomeuser3(user = "Anonymous") {
  console.log(`Welcome ${user}`);
}
welcomeuser3(); 
// functions returning a value - giving back a result
// return keyword

// function that return a the additional of two numbers
function add(a, b) {
    return a +b
}
let sum = add (10, 12)
console.log(sum);

// function that returns the product of two numbers
function product(num1, num2){
    return num1 * num2
}
console.log(product(67, 3));

// function that returns the naira equivalent of a doller amount passed into it
function convertToNaira(dollerAmount) {
    return `${dollerAmount} doller will give you ${dollerAmount * 1600} Naira`
}
console.log(convertToNaira(22));
console.log(convertToNaira(1500));

// write a function that returns the average ofbthree numbers
function calcAverage(n1, n2, n3){
    const avg = (n1, n2, n3) / 3;
    return avg;
}
console.log(calcAverage(3, 5, 7));

function userAge(num){
    return `You will be ${2025 - num} this year`
}
console.log(userAge(2004));

// write a function to check if the number is even or odd
function evenOrOdd(num){
    if (num % 2 === 0){
        return `${num} is Even`
    }else {
        return `${num} is Odd`
    }
}
console.log(evenOrOdd(90));
console.log(evenOrOdd(71));

// write A function to check if the withdrawal is possible or not
let balance = 2000;
function withdrawAmount(amount) {
    if (balance >= amount){
        balance -= amount
        return "Transaction Succesful"
    }else {
        return "Insufficient Balance"
    }
}
console.log(withdrawAmount(1800));
console.log(balance);
console.log(withdrawAmount(1000));

function depositeAmount (amount){
   balance += amount
   return balance
}
console.log(depositeAmount(4000));

// RETURN KEYWORD
// anycode after the return is inaccesible
function example(){
    console.log("Okay after Return");
    return "Hello"
    // unreachable code
}
example()

function FirstLetter(letter){
    return letter.charAt(0)
}
console.log(FirstLetter("caouch"));
console.log(FirstLetter("cat"));
//
function getFullName(firstname, lastname){
    return firstname + " " + lastname
}
console.log(getFullName("AdeOlu" , "oba"));

function longestSring(word1 , word2){
    if (word1.length > word2.length){  
        return word1
    } else if (word2.length > word1.length) {
         return word2;
    }else {
        return "All strings are the equal"
    }
}
console.log(longestSring("Equipment", "Balls"));
// function declaration 
function sayHello (){
    return "Hello"
}
// function expression, treats function like variable
const squareNumber = function (num) {
    return num ** 2
}
console.log(squareNumber(7));

const daysToweeks = function(days){
    return days / 7
}
console.log(daysToweeks(21));
// arroe function (modern)
// write an arrow function that returns the difference between two nums
const difference1 = (n1, n2) => {
    return n1 - n2
}

// shorten arrow functions (only a line inside the block of code)
const difference2 = (n1, n2) => n1 - n2
console.log(difference2(9, 6));

// Hoisting - behaviour in js where functions declarations are moved to the top before the code is executed
hoistedfunc() 
function hoistedfunc(){
    console.log("I am a function dev");
}
// question1
const maximumNum = (num1, num2) => {
    if (num1 > num2){
        return num1
    }else if (num2 > num1){
        return num2
    }else {
        return "No maximum number"
    }
}
console.log(maximumNum(10, 20));
// question2
const getstrings = (word) => word.toUpperCase();
console.log(getstrings("dog"));
// question3
let savings = 4000
const checkLoadEligibility = (amount) => {
    if (amount <= savings * 2) {
      return "Eligable for this loan";
    } else {
      return "You are not eligable for this loan";
    }
}
console.log(checkLoadEligibility(5000));
// question4
 const containSubsting = (str, substr) => str.includes(substr)
 console.log(containSubsting("hello", "ell"));
 // question5
 const convertminutes = (minutes) => minutes * 60
 console.log(convertminutes(2));


