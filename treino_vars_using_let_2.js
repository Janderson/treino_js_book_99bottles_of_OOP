// source: https://www.freecodecamp.org/news/var-let-and-const-whats-the-difference/

let greeting = "say Hey";

if (true){
    let greeting = "inside hey";
    console.log(greeting);
}

console.log(greeting); // Say hi


/*
Why is there no error? 
This is because both instances are treated as 
different variables since they have different scopes.
*/