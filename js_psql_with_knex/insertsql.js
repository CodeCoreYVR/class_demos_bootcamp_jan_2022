const knex = require('./client');

knex('posts').insert({ title: 'Slaughterhouse Five', content: "this is content" }).then(data => {
    console.log(data);
    knex.destroy();
})