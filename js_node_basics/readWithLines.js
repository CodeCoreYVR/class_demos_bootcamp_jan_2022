const fs = require('fs');

const fileName = process.argv[2];

const result = fs.readFileSync(fileName, "utf8");
// wait 5 mins

result.split('\n').forEach((element, index) => {
    console.log(`${index + 1} | ${element}`)
})

fs.readFile(fileName, 'utf8', (err, data) => {
    // console.log(data)
    // console.log(data.split('\n'));
    data.split('\n').forEach((element, index) => {
        console.log(`${index + 1} | ${element}`)
    })
})

console.log(123)

