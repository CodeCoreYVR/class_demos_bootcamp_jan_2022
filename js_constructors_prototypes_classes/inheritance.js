//Regular Dog constructor
function Dog(name){
    this.name = name;
}

//Dog constructor prototype methods
Dog.prototype.bark = function(){
    console.log(`${this.name}: woof!`)
}

Dog.prototype.fetch = function(){
    console.log(`${this.name} is fetching...`)
}

//instances of Dog objects
const rufus = new Dog('rufus')
const winston = new Dog('winston')

//DoggoFighter constructor
//Brand new constructor that will inherit from the Dog constructor
//It will have its own unique properties and abilities
function DoggoFighter(name, specialAbility){
    this.name = name;
    this.specialAbility = specialAbility;
}

DoggoFighter.prototype.useSpecial = function(){
    console.log(`${this.name} uses the special ability: ${this.specialAbility}.`)
}

//instance of DoggoFighter
const doge = new DoggoFighter('doge', 'ninja attack')

doge.useSpecial()

// doge.bark() does not work at the moment because doge is an instance of DoggoFighter and not Dog

//-----How do we inherit with prototypes?----->

//We want something like this:
// DoggoFighter.prototype.__proto__ = Dog.prototype

//Instead, we can inherit from other constructors:

Object.setPrototypeOf(DoggoFighter.prototype, Dog.prototype)
//what you want to set - first argument
//what you want to set it to - second argument

doge.bark()

// doge.__proto__ is still === DoggoFighter.prototype
//but doge.__proto__.__proto__ is now Dog.prototype

