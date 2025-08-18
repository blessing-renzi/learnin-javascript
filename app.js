const africanCountries = ["Ethiopia", "togo" ,"Ghana", "southafrica", "Nigeria"]
console.log(africanCountries.includes("kenya"));
console.log(africanCountries.length);
africanCountries.unshift("Senigal")
console.log(africanCountries);
africanCountries.push("Naiger")
console.log(africanCountries.sort());
console.log(africanCountries.reverse());
console.log(africanCountries.concat("chaina", "japan", "koria"));
const mycountry = africanCountries.find((country) => country.startsWith("G"))
console.log(mycountry);
const MoreThan5 = africanCountries.filter((country) => country.length > 5)
console.log(MoreThan5);
const capitalCountry = africanCountries.map((country)=> country.toUpperCase())
console.log(capitalCountry);
const capitalCountry2 = africanCountries.every((country) => country.includes("p"))
console.log(capitalCountry2);
const mybalance = 3000
const transactions = [300, -200, 400, -100, 500]
const debitTransactions = transactions.filter((transaction) => transaction < 0); 
console.log(debitTransactions);
const creditTransactions = transactions.filter((transaction) => transaction > 0)
console.log(creditTransactions);
const greaterThanCredit = transactions.some ((transaction) => transaction > mybalance)
console.log(greaterThanCredit);
const totalBalance = transactions.reduce((a, b) => a + b, mybalance)
console.log(totalBalance);




