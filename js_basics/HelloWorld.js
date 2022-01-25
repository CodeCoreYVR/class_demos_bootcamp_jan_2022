// example of using node HelloWorld.js
// console.log is a function to print stuff out into the terminal. Use it if you're wondering what a value is
console.log("Hello, World!");

// this // usually for one line comment
/* this one usually for multiple lines */
/* console.log("Hello, World!");
console.log("Hello, World!");
console.log("Hello, World!");
console.log("Hello, World!");
console.log("Hello, World!");
console.log("Hello, World!");
*/

// -------------- Arithmetic Operators --------------

1 + 1 // addition

1 - 1 // subtraction

3 * 3 //multiplication

3 / 3 //division

12 % 10 // modulo => returns the remainder

2 ** 4 // exponentiation 

// -------------- Number --------------

1

3.14

Infinity
    - Infinity


// Not a Number - an expression turns into this value if it cannot be represented as a number
// for example: 1 - 'a' => NaN
NaN


// -------------- String --------------

'jon' // use single quotes to create a string

"snow" // use double quotes to create a string

// `aaa` // use backticks to create a string

// if you need to use quotes within a string, you can use a combination of single quotes and double quotes or you can 
// escape the characters with a backslash \

"This 'is' a valid string"
'This \'is\' a valid string'

// concatenating strings

'jon' + ' ' + 'snow' // 'jon snow'

99 + ' bottles' // 99 bottles

// string interpolation 

// `${3 * 3} for ${'Mortal'} Men`

// to get the length of the string

"Dark Lord".length // 9

// using index(position)

"Dark Lord"[0] // D

"Dark Lord"[30] // undefined

// undefined is the value that not exist 


// -------------- Booleans --------------

// A boolean represents values that are true or false

// expressions that evaluate to booleans

// strict equality operator ===

1 === 1 // true

1 === '1' // false

// strict inequality operator !==

1 !== 1 // false

1 !== '1' // true

// === checks the datatype as well
// == won't check the datatype

//  greater than

20 > 4 // false

// less than
20 < 20 // false

// less than or equal
20 <= 20 // true

// greater than or equal
20 >= 50 // false

// -------------- Variables --------------

// use the let keyword with a name to declare a variable

let a;

// to assign a value to a variable use the assignment operator =

a = 1;

console.log(a); // prints 1

// you can do this all in one line

let b = 2;

console.log(b); // prints 2

b = 50; // so variables declared using let can be re-assinged

console.log(b); // prints 50;

// another way to declare a variable but you must assign a value to it at the same time (on the same line)
// const hello; // will give us an error

const hello = 'hello'; // this works

// multiple lines

let s = 1, d = 2;

