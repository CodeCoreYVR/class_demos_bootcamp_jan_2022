let fruit1 = 'apple'
let fruit2 = 'banana'
let fruit3 = 'pineapple'

//declare an array like this, with []
let fruitArray = ['apple', 'banana', 'pineapple'];
//apple = index 0 = fruitArray[0]
//banana = index 1 = fruitArray[1]
let newArray = [];
let string = '';
let obj = {};

//'apple', 'banana', and 'pineapple' are the data values in the ordered list called the array
//they are also referred to as the array's elements (or nodes)
//each value has a numbered position, the index

//Arrays can contain any type of values
[1,2,3,4,5,6,7] // array of numbers
['a','b','c','d'] //array of strings
[add(1,2), add(2,3)]// array with a mix of return values from calling functions
[['a','b'],[1,2,3,4,5],['hello',2,true,null]] // array full of arrays
[1,[2,[3,[4,[5, null]]]]] // nested arrays

//new Array(10)
//above is another way of declaring an array, but it is not recommended



//Array Operations and Methods

//.length to get the length of the array
let arr = [1,2,3,4,5]
arr.length // return length 5, but index of 4
//[].length // return length 0

//Grabbing the specific element value within an array index
arr[0] //return element value at index 0 which is 1
arr[-1] //return undefined
arr[arr.length-1] // will return the last element in the index which is 5

//concat - adds whatever you supply as an argument to the method to the given array
arr.concat([6,7,8]) // returns [1,2,3,4,5,6,7,8]

//slice - extracts the values of the given index arguments.
arr.slice(0,2) //returns [1,2] - includes first argument index, excludes second arg index
// The first argument is the index of where
// to start keeping values.
// The second argument is the index of where to
// stop keeping values. If not given, it's
// to the end of the array (the last index).
arr.slice(-2) //returns [4,5] - last 2 indices of the array

const arr2 = ['a','b','c','d']

//Mutable methods:

//pop() returns the last element in the index, and permanently removes it from the original array

arr2.pop() // return 'd' and change original array to ['a','b','c']

arr2.unshift('f') // return 4 for new length of array, and change original array to ['f','a','b','c']

arr2.shift() // take away the first element and return 'f', and change original array to ['a','b','c']

arr2.push('g') //will return new length of array, and and change original array to ['a','b','c', 'g']


//To check if a value is an array
Array.isArray(value) //Array.isArray(arr2) would return true

//To check if a specific value is in a given array
arr2.includes('a') //returns true is value exists in array








