const knex = require("./client");

knex("posts")
    .update({ title: "new title", content: "new content" })
    .where("title", 'first').then(data => {
        console.log(data);
        knex.destroy();
    })