const knex = require('./client');


// select * from posts;
knex.select("*").from("posts").then(data => {
    console.log(data);
    knex.destroy();
});



