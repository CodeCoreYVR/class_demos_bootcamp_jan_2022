// Creating a Constructor
//the arguments that the constructor function takes
//are the properties that the constructor will have

function Guest(name,email,visitTime,phone){
    //this represents the object that will be created
    this.name = name;
    this.email = email;
    this.visitTime = visitTime;
    this.phone = phone;
    this.printGuest = function(){
        console.log(`${this.name} visited us at ${this.visitTime}`)
    }
    return console.log("Don't fire off 'this' in a constructor function")
    //'this' loses its context when outside of the function and will append
    //itself to the global object instead of the instance of the created object
}

const g1 = new Guest('Sally', 'sally@example.com', '1:00pm', '111-111-1111')
// console.log(g1)

const g2 = new Guest('Kelly', 'kelly@example.com', '1:00pm', '111-111-2222')

//Constructor functions are still functions, and can still retrun values without 
//constructing with a "new keyword"
Guest()

//Arrow functions CANNOT be constructors
//For example, the following function would not work as a constructor
// const Dog = (name,email,visitTime,phone) => {

// }

//Method to check if something is an instance of a constructor
console.log(guest1 instanceof Guest) //false
console.log(g1 instanceof Guest) //true

