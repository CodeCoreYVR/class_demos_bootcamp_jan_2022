/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.table('posts', table => {
        table.string('imageUrl');
        // snake_case => image_url
        // camel_case =>imageUrl
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.table('posts', table => {
        table.dropColumn('imageUrl');
    })
};
