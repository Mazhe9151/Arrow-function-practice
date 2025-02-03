// List 4 data types in a multiline comment
/*
Integer
String
Boolean
Float
*/
// Typeof
console.log(typeof 42);
console.log(typeof "blue");
console.log(typeof false);

var x = 1;
var thing = "red";
var truth = true;
console.log(typeof x);
console.log(typeof thing);
console.log(typeof truth);
// Let vs Const vs Var
var x = 2; 

let age = 15;
age = 16;

const name = "Joe";
alert(name);
// Reassignment (no let)
age = 10;
age = 23;
age = 25;

alert(age);
// Essential Operations
let sum = age + 2;
console.log(sum);
sum = sum - 5;
console.log(sum);
sum = sum / 2;
console.log(sum);
sum = sum + 10;
console.log(sum);
sum += 10
console.log(sum);
sum -= 4
console.log(sum);
sum *= 5;
console.log(sum);
// Additional operations

// User Input
const subject = prompt("What is your favorite subject?");
console.log("Your favorite subject is " + subject);
console.log("Your favorite subject is ", subject);
console.log(`Your favorite subject is ${subject}`);

// Concatenation v. templates

// String Methods (uppercase, lowercase, includes)

// Math methods

// Comparison operators - true or false?

// Conditional statements;

// Functions

// Returns half the number if it can be halved; otherwise returns false

// Functions can also be written as arrows. Body of function doesn't change, just the signature.
