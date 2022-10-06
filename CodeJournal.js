// Variables - containers that store values

var name // a declared variable, but not intialized (no value) and it's in the "global scope" (BAD)

let foo // a declared ES6 variable that can be changed - still no value however

const bar = "Bar" // a declared ES6 constant that cannot be changed
// '=' is the assignment operator, read it as "is assigned the value of..."

const ANSWER = 42

// Strings - a set of characters

let string1 = "Hello World!"  // string literal assignment

let string2 = "Hello World! (from 'Johnny Utah')"

let string3 = new String("Hello New World!") // using a String constructor

// Numbers

let myNum = 203948209834

let myNum2 = 75.25

"1" // is not a number!  It is a string
"1" == 1 // evaluates to true because of type coercion and loose equality checking
"1" === 1 // evaluates to false because it forces string equality checking