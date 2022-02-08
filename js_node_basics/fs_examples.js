const fs = require("fs");

fs.readdir(".", (err, data) => {
    // console.log(err)
    // console.log(data)
})

// console.log(123)

// fs.writeFile("test.txt", "new data", err => {
//     console.log(err)
// })

fs.stat("test.txt", (err, stat) => {
    // console.log(stat)
    console.log(stat.isDirectory())
    console.log(stat.isFile())
})