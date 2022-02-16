const readline = require("readline");

const rl = readline.createInterface(
    {
        input: process.stdin,
        output: process.stdout
    }
)

rl.question("what's your name?\n", answer => {
    console.log(`My name is ${answer}`);
    rl.close();
})