// asynchromous Js
//Non blocking code
console.log("A");
setTimeout(() => {
    console.log("B");
    
}, 5000);
console.log("C");
// featch data from an external source 
// API application programing interfce
// private and public API
const url = "https://jsonplaceholder.typicode.com/users";
// callback (.then) async/await
// PROMISES - pending and fulfilled
// Json - javascript object notation
const fetchUsers = async()=> {
    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log(error);
    }
};
const users = fetchUsers() 
console.log(users);

 const productUrl = "https://fakestoreapi.com/products";
const fectProducts = async() => {
    try {
     const response = await fetch(productUrl);
     const data = await response.json();
     console.log(data);   
    } catch (error) {
        console.log(error);
        
    }
} 
fectProducts()
