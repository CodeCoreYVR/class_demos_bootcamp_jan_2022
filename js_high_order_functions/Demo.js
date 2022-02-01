function add(a, b) {
    const total = a + b;
    return total;
}

function fnReturner() {
    return add;
}

const adder = fnReturner();

// console.log(adder === add);

// console.log(adder(4, 3))

// const bark = (name, sound = "Woof!") => {
//     return `${name} barks ${sound}`
// }
// console.log(bark('benji'))

const bark = name => `${name} barks`

console.log(bark('benji'));



