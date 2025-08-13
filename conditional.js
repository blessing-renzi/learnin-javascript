// CONDITIONAL STATEMENT
//if statement
console.log("conditional statement");
// if(conditional){
//action
// lines of code
//}
if (1 < 2) {
  console.log("ola");
}
let balance = 6000;
let amount = 2000;
if (balance >= amount) {
  balance -= amount;
  console.log("Transaction Succesfull, balance is " + balance);
}

//determine if the password is long enough (>= 10)
const password = "password15#";
if (password.length >= 10 && password.includes("#")) {
  console.log("passowd is good enough");
}

const age = 18;
if (age >= 18) {
  console.log("You are eligable to vote");
}
//if else
if (9 > 7) {
  console.log("YES");
} else {
  console.log("NO");
}
if (balance >= amount) {
  balance -= amount;
  console.log("Transaction Succesfull, balance is " + balance);
} else {
  console.log("Insufficient Funds");
}

const num = 45;
if (num > 0) {
  console.log("Possitive");
} else {
  console.log("Negative");
}

const number = 24;
if (number % 2 == 0) {
  console.log("Even number");
} else {
  console.log("Odd number");
}

// multiple else if statement
// over populated >= 300, under populated <= 50 and balanced > 50 and < 300
const censusResult = 50.1;

if (censusResult >= 300) {
  console.log("OVER POPULATED");
} else if (censusResult <= 50) {
  console.log("UNDER POPULATED");
} else {
  console.log("BALANCED POPULATION");
}

// lotery system for a company a b c(winner)
const usersChoiceA = "a";
if (usersChoiceA === "c") {
  console.log("CONGRATULATIONS");
} else {
  console.log("TRY AGAIN");
}

const usersChoiceB = "a";
if (usersChoiceB === "a") {
  console.log("TRIP TO DUBAI");
} else if (usersChoiceB === "c") {
  console.log("CAR");
} else if (usersChoiceB === "d") {
  console.log(BLENDER);
} else {
  console.log("TRY AGAIN");
}

const aged = 40;
if (aged >= 40) {
  console.log("Elderly Persn");
} else if (age >= 18) {
  console.log("Young Adult");
} else if (age < 18) {
  console.log("Teenager");
} else {
  console.log("Invalid age");
}

    let colour = 10;
if (colour >= 8){
    console.log("Green");
} else if (colour >= 5){
    console.log("Orange");
}else{
    console.log("Red");
}

let burnley = 3
let sunderland = 2
if (burnley > sunderland){
    console.log("burnley wins");
}else if (burnley < sunderland){
    console.log("Sunderland wins");
}else {
    console.log("it is a draw");
}

const bet = burnley + sunderland
if (burnley === sunderland && bet > 4){
    console.log("Burnely wins the bet");
} else {
    console.log("You Lose ");
}

if (sunderland > burnley || sunderland > 2){
    console.log("Ola Wins");
}else{
    console.log("ola lose");
}
if ((sunderland > burnley || burnley > sunderland) && bet > 2){
    console.log("You win");    
} else{
    console.log("You lost");
}
const liverpool = 2
const mancity = 5
const liverpoolcorner = 4
const mancitycorner = 5
const total = liverpool + mancity
if (liverpool > mancity && liverpool < 4 && total === 9){
    console.log("Emmanuel wins");    
} else {
    console.log("Emmanuel lost");
}