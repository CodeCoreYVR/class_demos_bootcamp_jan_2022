const knex = require("./client");


console.log(knex("posts").where("title", "second").del())



// .then(data => {
//     console.log(data);
//     knex.destroy();
// })
