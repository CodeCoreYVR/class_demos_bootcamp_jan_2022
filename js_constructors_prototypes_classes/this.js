'use strict'


//using 'this' in function
function printThis(){
    console.log(this) //will refer to the global object, or undefined if in strict mode
}

printThis()

//in method
const obj = {
    printThis: function(){
        console.log(this) //will refer to the object the method is in, the owner of the method
    }
}

obj.printThis();

function can(fn){
    fn()
}

console.log('logging can...')
can(obj.printThis) // not referring to the specific object anymore because it is removed from its context

const bindedPrintThis = obj.printThis.bind(obj)

console.log('logging bindedPrintThis...')
can(bindedPrintThis)


