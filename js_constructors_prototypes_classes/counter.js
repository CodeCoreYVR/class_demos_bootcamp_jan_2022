//Build a constructor that creates objects like:

//{
//     count: 0, //number
//     step: 1, //number
//     inc: method that increases count by step,
//     dec: method that decreases count by step
// }

function Counter(count, step=1){  //set default value if step is not passed as an argument
    this.count = count || 0; //set default value of 0 if count not passed as argument
    this.step = step

    this.inc = function(){
        this.count += this.step;   // same as this.count = this.count + this.step
        return this;
    }

    this.dec = function(){
        this.count -= this.step     //same as this.count = this.count - this.step
        return this;
    }

    this.now = function(){
        return this.count
    }

}

const counter1 = new Counter(10,5) //this will start a count of 10, and will either increase or decrease by 5 steps
const counter2 = new Counter() //this will start a count of default 0, and will either increase or decrease by default 1 step


counter1.inc()
// console.log(counter1)

// console.log(counter1.now())
// console.log(counter2.now())

console.log(counter1.inc().inc().dec().now())
//this will get undefined
//if we want chained behaviour, we have to make sure that
//the methids what we're calling are returning 'this'
//because 'this' represents the object that owns the method

// Create multiple counter objects:
const c3 = new Counter();
const c4 = new Counter();
const c5 = new Counter();
const c6 = new Counter();
const c7 = new Counter();
console.log(c3)
console.log(c4)
console.log(c5)
console.log(c6)
console.log(c7)
//Notice that every time you create a new instance of an object, it is recreating the function
//This takes up additional space in memory, even though they all look exactly the same
//That is why constructors have prototypes when you use the "new" keyword
