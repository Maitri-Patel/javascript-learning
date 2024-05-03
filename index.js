// variable - A container that stores a value 
//            behaves as if it were the value it contains 

// 1. declaratio - let x;
// 2. assignment - x = 10;
// 3. both let x = 10;

/* let age = 20;
let price = 15.22;
let gpa = 3.76;

console.log(`Your age is ${age}`);
console.log(`The price of book is ${price}`);
console.log(`My current gpa is ${gpa}`);

// typeof function is used to know the type of variable 
console.log (typeof age);

// boolean 
let online = true;
console.log(typeof online);
console.log(`are you available ${online}`); */


/* Arithematic Operation
Operator Precendance:
1.parenthsis()
2.exponenets **
3.multiplication & divison & module
4.addition & subtraction

*/

/* let student = 10;
student += 5 ; 
student ++ ;// this means +1
console.log(student) */

/* How to Accept user input 
1. easy way : window prompt 
2. HtML Text box  
*/

/* let username;
username = window.prompt("what is your username");

console.log(username); */

let username;

document.getElementById("mySubmit").onclick = function(){
    username = document.getElementById("myText").value;
    document.getElementById("myH1").textContent = `Welcome ${username} to JavaScript Learning`
}
