//STRINGS -Texts characters in double or single quotes
const firstName ="John"
const lastName ="Doe"
const middleName ="Dean"

//string properties - length
console.log(firstName.length, middleName.length);

// string concatenation( joining of strings + a+ b)
const fullName = firstName + " " + lastName
console.log(fullName);
console.log(fullName.length);

// string methods - built in javascript functions that works on strings
//touppercase, tolowercase
console.log(fullName.toUpperCase());
console.log(fullName.toLowerCase());

//startswith, endwith, includes
console.log(fullName.startsWith("J"));
console.log(fullName.endsWith("oe"));
console.log(fullName.includes("n D"));

//replace and replaceAll
console.log(fullName.replace("o", "#"));
console.log(fullName.replaceAll("o", "#"));

const myEmail = "blesssingw043@gamil.com"
console.log(myEmail.length);
console.log(myEmail.toUpperCase());
console.log(myEmail.replace("@","*"));
console.log(myEmail.includes("m"));
console.log(myEmail.endsWith("google.com"));

// characterAt, indexOf, lastIndexOf
// js has a zero based language (assigning position from 0)
console.log(myEmail.charAt(2));
console.log(myEmail.indexOf("o"));
console.log(myEmail.lastIndexOf("o"));

//concat, trim, slice, subscribe, substr
//concat
console.log(fullName.concat(" is my name"));
 //trim removes whitespaces
 const userName = "    bill   ";
    console.log(userName);
    console.log(userName.trim());
    console.log(userName.trimStart());
    console.log(userName.trimEnd());

// Method that allows us Extract portions ofba string
const surName = "Brooke"
//slice, substring (start, end(none-inclusive))
console.log(surName.slice(2, 5));
console.log(surName.substring(1, 5));

//substr(start and numberof characters)
console.log(surName.substr( 2, 2));

 //concatenation
 const author = "chinua Achebe";
 const bookTitle = "Thing Fall Apart";
 const yearPublished = "1997"
 // the book thimgs fall apart written by chainua was published in the year 1997
//template literals
const summary = `The book ${bookTitle} was authored by ${author.toUpperCase()}`
const summry2 = `${author} wrote the book ${bookTitle}`
console.log(summry2);

//Quote Tinubu said I quote 'Let The Poor Breath'
const quote = ` Tinubu said I quote 'Let The Poor Breath'`;
console.log(quote);

const hello = "Hello World"
console.log(hello.toUpperCase());
const java = "JAVASCRIPT";
console.log(java.toLowerCase());
console.log(hello.charAt(0));
console.log(hello.slice(6,11));
const like ="I like cats"
console.log(like.replace("cats", 'dogs'));
console.log(hello.startsWith("Hello"));
const charName = " sokraits papastathopoulos"
console.log(charName.length);
const nickName = "BB"
console.log(nickName);
const favClub = "sporty" 
console.log(favClub);
const result = `I am ${nickName}  and my favourite club is ${favClub}`;
console.log(result);









