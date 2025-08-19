// OBJECTS (key: value)
// Objects are very descriptive and can take any data type
//objects methods - they are function declaration written by developer inside of an object
const person = {
    name : "John Doe",
    age: 42,
    complexion: "Dark",
    isMarried: true,
    friends: ["Jane", "Peter", "Susan"],
    discription: function(){
        return `My name is ${this.name}, i am ${this.age} years old, and i am ${this.complexion} complexion`
    },
    maritalstatus: function(){
        return `${this.name} ${this.isMarried ? "is" : "is not"} married`;
    },
};
console.log(person.maritalstatus());

console.log(person.discription());
console.log(person);
// Get properties from objects, dot notation, bracket notation 
// dot notation objectName.propertyName
console.log(person.name);
console.log(person.friends);
console.log(person.friends[1]);
// bracket notation objectName ["propertyName"]
console.log(person["friends"]);
console.log(person["age"]);

// add new property to an object
person.height = `6'1`;
person.gender = "Male";
person["hobby"] = "swimming"
console.log(person);
// remove properties 
delete person.complextion

// Nested objects - id, personalInfo, contact, accountInfo
const customer = {
    id: "cust-1",
    personalInfo:{
        firstName: "peter",
        lastName: "pan",
        gender: "Male",
        dateOfBirth: "1990-06-12",
        nationality: "Nigerian",
    },
    contactInfo:{
        email: "peterpan@gmail.com",
        phone: "+2349135023774",
        address: {
            street: "12, Bode Thomos",
            city: "Lagos",
            postalCode: "10001"
        },
    },
     accountInfo: {
            cardType: "Visa",
            accountNumber: "9135023774",
            accountType: "Savings"
        },
        greeting: function(){
            return `Hello ${this.personalInfo.firstName}, Welcome Back`
        },
        getAdress: function(){
            return `${this.personalInfo.firstName} lives at ${this.contactInfo.address.street} Street, ${this.contactInfo.address.city} `;
        },
}
console.log(customer.personalInfo.dateOfBirth);
console.log(customer.contactInfo.address.street);
console.log(customer.greeting());
console.log(customer.getAdress()); 

//adding bank name to the account info
customer.accountInfo.bankName = "GTBank"
console.log(customer);

//objects methods - they are function declaration written by developer inside of an object
// complex data structure
// object destruction
const book = {
    title: "Purpple Hibiscus",
    author: "Chimamanda Ngozi Adichie",
    yearPublished: 2003,
    theme: ["Family", "Religious", "Freedom"],
    setting: {
        country: "Nigeria",
        cities: ["Enugu", "Nsuk"],
        timePeriod: "Postcolonial Nigeria"
    }
};
const{title, yearPublished, theme, setting:{country}} = book
console.log(title, yearPublished, theme, country);






 





