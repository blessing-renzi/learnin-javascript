// Question 1
let tA = 96 + 108 + 89;
let tB = 88 + 91 + 110;
let avgA = tA / 3;
let avgB = tB / 3;

if (avgA > avgB) {
  console.log(`Team A has scored the highest ${avgA}`);
} else if (avgB > avgA) {
  console.log(`Team B has scored the highest ${avgB} `);
} else {
  console.log("Its a TIE");
}

// Question 2
let item1 = 120;
let item2 = 80;
let item3 = 150;
let totalcost = item1 + item2 + item3;
let accountBal = 400;
accountBal >= totalcost
  ? console.log("Transaction succesful")
  : console.log("insufficient funds");

// Question 3
const movieage = 18;
const userage = 16;
userage >= movieage
  ? console.log("You can watch this movie")
  : console.log("You are not old enouhg to whatch this movie");

// Question 4
const ticketPrice = 150;
const discountAmount = 30;
const balance = 5000;
const isAFan = true;
const fanprice = ticketPrice - discountAmount;
isAFan
  ? console.log(`you are paying ${discountAmount}`)
  : console.log(`you are paying ${ticketPrice}`);
balance >= discountAmount || balance >= ticketPrice
  ? console.log("You can buy the football ticket")
  : console.log(" You do not have enough money for the football ticket");

// assignment 1
const jacketPrice = 250;
const discount = 50;
const userBalance = 220;
const finalPrice = jacketPrice - discount;
userBalance >= finalPrice
  ? console.log("You can buy the jacket")
  : console.log("You do not have enough money to buy the jacket");

// assignment 2
const minimumAge = 16;
const studentAge = 15;
minimumAge >= studentAge
  ? console.log("You are eligable for driving a driving license")
  : console.log("You are not eligable for driving a driving license");
