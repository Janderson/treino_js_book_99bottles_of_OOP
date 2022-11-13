// source: https://www.freecodecamp.org/news/var-let-and-const-whats-the-difference/

// Let
// let is now preferred for variable declaration. 
// It's no surprise as it comes as an improvement to var declarations. 
// It also solves the problem with var that we just covered. 
// Let's consider why this is so.

let greeting = "Say Hi";
let times = 4; 

if (times > 3){
    let hello = "say hello instead";
    console.log(hello);
}

console.log(greeting);
let greeting = "new hello Hello instead"; 
// error: Identifier 'greeting' has already been declared

console.log(hello);


