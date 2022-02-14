/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  // async and await to call the functions
  await knex('posts').del()
  await knex('posts').insert([
    { title: 'rowValue1' },
    { title: 'rowValue2' },
    { title: 'rowValue3' }
  ]);
};
