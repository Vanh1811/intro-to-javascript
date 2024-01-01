/*
const name = "John";

const greeting = `Hello ${name}`;
console.log(greeting);

const one = "Hello, ";
const two = "how are you?";
const joined = `${one}${two}`;
console.log(joined); // "Hello, how are you?
*/

const button = document.querySelector("button");

function greet(){
    const name = prompt("What is your name?");
    const greeting = document.querySelector("#greeting");
    greeting.textContent = `Hello ${name}, nice to see you`;
}

button.addEventListener("click", greet);


const newline = `One day you finally knew
what you had to do, and began,`;
console.log(newline);

const bigmouth = 'I\'ve got no right to take my place…';
console.log(bigmouth);

/*

let text = "Please visit Microsoft!";
let newText = text.replace(/MICROSOFT/i, "W3Schools");

let content = "Apple, Banana, Kiwi";
let part = text.slice(-12);

let str = "Apple, Banana, Kiwi";
let parts = str.substr(-4);

let text1 = "Hello World!";
let text2 = text1.toUpperCase();

let text1 = "Hello";
let text2 = "World";
let text3 = text1.concat(" ", text2);

let text1 = "      Hello World!      ";
let text2 = text1.trim();

let text1 = "     Hello World!     ";
let text2 = text1.trimStart();

let text = "5";
let padded = text.padStart(4,"x");
//Pad a string with "x" until it reaches the length 4:
// output: xxx5

let numb = 5;
let text = numb.toString();
let padded = text.padStart(4,"0");

let text = "HELLO WORLD";
let char = text.charAt(0);

let text = "HELLO WORLD";
let char = text[0];

let text = "Hello";
const myArr = text.split("");

text = "";
for (let i = 0; i < myArr.length; i++) {
  text += myArr[i] + "<br>"
}
document.getElementById("demo").innerHTML = text;

let text = prompt("Who's there?");
if(text === "Admin"){
    answer = prompt("What's the password?");
    if(answer === "TheMaster"){
        alert('Welcome!');
    }
    else if(answer === null || answer ===""){
        alert('Canceled');
    }
    else{
        alert('Wrong password');
    }
}
else if(text === null || text ===""){
    alert("Canceled");
}
else{
    alert("I don not know u");
}

text1.concat(text2);

*/

const birthYear = 1948;
const thisYear = 1965;
const firstName = "Carlos";
const lastName = "Stevenson";

const greeting = "Hello! My name is " + firstName + " " + lastName + " and I am " + (thisYear - birthYear) + " years old.";

console.log(greeting);