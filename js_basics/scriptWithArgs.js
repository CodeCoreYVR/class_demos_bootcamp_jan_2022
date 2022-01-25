console.log(process.argv);

const firstArg = process.argv[2];
const secondArg = parseInt(process.argv[3]);

console.log("first: ", firstArg);
// secondArg > 200 => true or false


// -------------- Control Flow --------------

// if else statement

if (secondArg > 200) {
    console.log("it's greater than 200");
} else if (secondArg > 150 && secondArg < 200) {
    console.log("it's between 100 and 200");
} else if (secondArg > 100 && secondArg < 150) {
    console.log("it's between 100 and 200");
} else if (secondArg > 50 && secondArg < 100) {
    console.log("it's between 100 and 200");
} else {
    console.log("less than 100");
}

// if (5 > 7) {
//     console.log('Yes');
// } else {
//     console.log('No');
// }

// ternary operator / expression

5 > 7 ? console.log("Yes") : console.log('No')

// while loop
let b = 0;
while (b < 2) {
    console.log("Winter is coming!");
    b = b + 1;// => b += 1 => b++
    const abc = 'abc';
}

// for loop
for (let i = 0; i < 5; i += 1) {
    console.log("current i is ", i);
    let def = 'def';
    if (true) {
        console.log(def);
    }
}
