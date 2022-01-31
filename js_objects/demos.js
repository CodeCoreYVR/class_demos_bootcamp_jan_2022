// console.log(typeof {})

const carName = 'aaa';
const carBrand = "TOYOTA"

// const car = {
//     name: "aaa",
//     brand: "TOYOTA",
//     year: "2020"
// }

// const dog = {
//     age: 12,
//     firstName: "Benji"
// }

// 1. we declare an object by using curly braces{}
// 2. Every key should be a string(quotes omitted) and followed by a value separated by a colon :
// 3. Each key value pair is separated by a comma,
// 4. in other languages they are also called dictionaries or hashes
// 5. key names within an object must be unique
// 6. keys are also called properties

// console.log(dog);

// console.log(dog.age);
// console.log(dog.firstName);

// console.log(dog["age"]);
// console.log(dog["firstName"]);

// we can use dot notation or square bracket notation to 
// select properties from the object or assign the values

// but we can only use square bracket notation to select or assign 
// the properties which have special symbol inside

// dog["last name"] = 'bbb';

// console.log(dog);

// console.log(dog["last name"]);


const newKey = "color";

// dog[newKey] = "red";

// console.log(dog);

// dog["br" + "eed"] = "corgi";
// square bracket notation is also useful to generate keys built from expressions


// console.log(dog);

const car = {
    name: "aaa",
    brand: "TOYOTA",
    year: "2020"
}
const parts = {
    doors: 4,
    airConditioning: true,
    year: "2021"
}

// console.log(Object.keys(car));

// console.log(Object.values(car));

// console.log(Object.assign(car, parts));

// console.log(car);


for (let key in car) {
    // console.log(key, car[key]);
}

const dog = {
    age: 12,
    firstName: "Benji",
    bark: function () {
        return "Bark!!!!";
    },
    sleep() {
        return "ZZZzzzz"
    },
    logThis() {
        console.log(this.name, this.age);
    }
}

// const bark = function () {
//     return "Bark!!!!";
// }

// dog.bark = bark;

// dog.bark = function () {
//     return "Bark!!!!";
// }

dog.sleep()

console.log(dog.bark());



function test() {
    console.log(this);
}
test();

dog.logThis();