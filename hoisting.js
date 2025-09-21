// Demonstrating variable hoisting in Node.js

console.log("Using var:");
console.log(myVar); // undefined due to hoisting
var myVar = "I am declared with var";
console.log(myVar); // Prints the assigned value

console.log("\nUsing let:");
try {
    console.log(myLet); // ReferenceError: Cannot access 'myLet' before initialization
} catch (error) {
    console.log("Error:", error.message);
}
let myLet = "I am declared with let";
console.log(myLet); // Prints the assigned value

console.log("\nUsing const:");
try {
    console.log(myConst); // ReferenceError: Cannot access 'myConst' before initialization
} catch (error) {
    console.log("Error:", error.message);
}
const myConst = "I am declared with const";
console.log(myConst); // Prints the assigned value