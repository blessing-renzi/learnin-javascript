// ternary operators is another way of writting if else statement
let otpSent = 457
let otpEnterd = 458
if (otpEnterd === otpSent){
    console.log("Transaction succesfull");    
}else {
    console.log("Wrong OTP, try again");
}

// ternary operator \
// condition ? first action : second action 
otpEnterd === otpSent ? console.log("Transaction completed") : console.log("Wrong OTP");

let num = 20
num % 2 == 0 ? console.log("Even Number") : console.log("Odd Number");

let balance = 6000
let amount = 8000
balance >= amount ? console.log("Transaction Succesful") : console.log("Insufficient Fund");

const isMarried = false
// He is married or He is not married
const statement = `He ${isMarried ? "is" : "is not"} married`;
console.log(statement);

