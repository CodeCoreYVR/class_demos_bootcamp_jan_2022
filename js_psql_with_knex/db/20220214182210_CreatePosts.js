/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    //   create a posts table
    return knex.schema.createTable("posts", table => {
        table.increments("id"); // create a column called id with the type int and it's auto increase
        table.string("title"); // create a column called title with the type string(Varchar 255)
        table.text("content"); // create a column called content with the type text
        table.timestamp("createdAt").defaultTo(knex.fn.now()); // create a column called createdAt with the type timestamp which also defaults to the machine time(current time)
    })

    // CREATE TABLE posts id serial, title varchar(255), content TEXT, createdAt timestamp, like int;
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    // rollback
    return knex.schema.dropTable("posts");
};
