//DOM - document object model
// acess element on the page , change content, add or remove element dynamically
// respond to users interaction

// 1. ACCES - GET ELEMENT ON THE PAGE
// getelementbyid, getelementbyname(h1, p), getelementbyclassname
//  const heading = document.getElementById("hello")
//  console.log(heading);
// const heading = document.getElementsByTagName("h1")
// console.log(heading);
// const paragraphs = document.getElementsByClassName("para1")
// console.log(paragraphs);
// console.log(paragraphs[0]);

// QUERYSELECTOR(First elemet). QUERYSELECTORALL (all element that fits its selection)
// Uses css selection .className #idname div.error
// const para = document.querySelector(".para1")
// const paras = document.querySelectorAll(".para1")
// console.log(para);
// console.log(paras);

// 2. CHANGING CONTENT WITH JS
const heading = document.querySelector("#hello");
heading.textContent += ", js is fun";
const para = document.querySelector(".para1");
para.textContent = "hello dom practice";

const myDiv = document.querySelector("div");
// myDiv.innerHTML += "<p> p from js</p>"
const userName = "John";
myDiv.innerHTML = `<h1>Welcome ${userName} </h1>`;
// change attributes
const beginPara = document.querySelector(".begin");
beginPara.id = "okay";
beginPara.className = "good";
beginPara.style.color = "green";
beginPara.style.backgroundColor = "purple";
// interacting with styles (classnames)
const msgHeading = document.querySelector(".msg");
// classNames(Totally overide)
// msgHeading.className = "success"
// classList (add, remove, contain)
msgHeading.classList.add("success");
// msgHeading.classList.remove("msg")
console.log(msgHeading.classList.contains("msg"));

const section = document.createElement("section");
section.innerHTML = "<h1>created from js</h1>";
const body = document.querySelector("body");
body.appendChild(section);

const form = document.createElement("form");
form.innerHTML = `<input placeholder='username' type="text">  
                  <input placeholder='password' type="text"> <button>Login</button> `;
body.appendChild(form);

const link = document.createElement("a")
link.textContent = "CONTACT"
link.href = "https://facebook.com"
const nav = document.querySelector("nav")
nav.appendChild(link)

// Resopnding to users interaction(click, summit, typing)
// event-(event listener), event handler 
const btn = document.querySelector("button")
// log user clicked
btn.addEventListener("click", ()=> {
    console.log("usser clicked");
    body.style.backgroundColor ="blue"
})
const btn2 = document.querySelector(".testbtn");
const para3 = document.querySelector(".desc");

btn2.addEventListener("click", ()=> {
    para3.style.display = "none"
 });

 // form handling -> submit (do stn)
 // 1. prevent the default behaviour of the form 
 // 2. get the users input (.value)
 const myForm = document.querySelector("form")
 const usernameInput = document.querySelector("input")
 const smallError = document.querySelector("small")

 myForm.addEventListener("submit", (event)=> {
    event.preventDefault();
    const usernameVale = usernameInput.value
    if(!usernameVale.trim()){
        smallError.textContent ="please provide username"
    } else {
        console.log("form submited", usernameVale);
        smallError.textContent = "";
    }
 });

 usernameInput.addEventListener("input" , () => {
    const usernameVale = usernameInput.value;
    if (usernameVale.trim().length < 5){
        smallError.textContent = "the min username is 5"
        //  usernameInput.style.border = "2px solid red";
        usernameInput.className = "error"
    } else {
        smallError.textContent = "";
        usernameInput.className = "";
    }
 })





