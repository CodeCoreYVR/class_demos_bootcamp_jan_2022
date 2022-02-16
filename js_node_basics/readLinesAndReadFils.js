const fs = require("fs");
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question("Which file do you want to read?\n", answer => {

    fs.readFile(answer, 'utf8', (err, data) => {
        data.split('\n').forEach((element, index) => {
            console.log(`${index + 1} | ${element}`)
        })
        rl.close();
    })

})


