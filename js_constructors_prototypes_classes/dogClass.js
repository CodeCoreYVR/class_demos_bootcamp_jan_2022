//class is created with the classs keyword
//a class, similar to constructor, always starts with a capital letter

class Dog{
    //special method 'constructor' for classes
    //this is what is fired off when we create a new intance of Dog
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    //inside of a class, the methods are automatically assigned as prototype methods
    bark(){
        console.log(`${this.name}: woof!`) 
    }

    fetch(){
        console.log(`${this.name} is fetching...`)
    }
}

const lucky = new Dog('lucky', 2)
console.log(lucky)

lucky.bark()

class DoggoFighter extends Dog {
    //extends keyword followed by a class name, will allow the DoggoFighter to inherit
    //from the parent class Dog and all its prototype methods
    constructor(name,age,specialAbility){
        super(name, age)
        // this.name = name;
        // this.age = age;
        this.specialAbility = specialAbility;
    }
    useSpecial(){
        console.log(`${this.name} uses the special ability: ${this.specialAbility}.`)
    }
}

const drillbitDarrel = new DoggoFighter('drillbitDarrel', 4, 'drill')




