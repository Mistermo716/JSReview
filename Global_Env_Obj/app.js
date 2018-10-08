//This file will help examine how the JS Engine
//Creates global Object and Env

//Everytime JS is running we have a
//Global Obj and This created

//global obj = this which is window on the global level

//Global means not inside a function

//Since this variable a is not in a function
//it is sitting in a global obj
//which can be accessed globally
//this.a and window.a are both value of a
var a = 'Hello World!';

let c = 'Test hello';

//console logs to prove that this and window are both global
//this.a since not in a function refers to global var
console.log(`window.a: ${window.a}`);
console.log(`this.a: ${this.a}`);

//let is not global. var attaches global scope
console.log(this.c);

//this function is also global
function b() {}

//Execution context
/* When JS is executed Global Object and 'This is created' */
