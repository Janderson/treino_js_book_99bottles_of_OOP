// source: https://www.freecodecamp.org/news/var-let-and-const-whats-the-difference/

var greeter = "hey there";

function some_func(){
    var hello = "hello";
}

console.log(greeter);

var greeter = "new value";

console.log(greeter);

greeter = "now other value";

console.log(greeter);


console.log(hello);