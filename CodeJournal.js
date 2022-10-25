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

// Boolean

let myBool = false

// need to look further into "truthy" and "falsy" values

// Arrays - hold sets of items of any data type

let mySimpleArray = [] // this is an empty array - notice the square brackets

// ordering     0    1      2        3      4
let myArray = [42, "Bob", myBool, ANSWER, true] // arrays contain any mix of data types

let firstItem = myArray[0]  // in this case firstItem === 42

const lastItem = myArray[myArray.length - 1]

// Objects

let minObject = {} // valid, most minimal object possible

let myCar = {
    make: 'Chevrolet',
    color: 'Green',
    year: 1964,
    vin: '20349830948LKJDFLKJ'
}

myCar.numDoors = 4 // a new property can be simply added to an existing object using dot notation!

const anotherObject = { // objects can contain just about anything
    wordz: ['foo', 'bar', 'baz'],
    car: {
        make: 'McLaren',
        model: '720s'
    },
    awesomeness: true
}

// Functions

function myFunction() {  // this is a named function definition
    return "My greeting to you... is what I return to you!"
}

function sumTwoThings(thingOne, thingTwo) {
    return thingOne + thingTwo
}