/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = function (knex) {
  // Deletes ALL existing entries
  // using .then to chain the functions
  return knex('posts').del().then(rowNumb => {
    const posts = [];
    for (let i = 0; i < 10; i++) {
      posts.push({
        title: "abc"
      })
    }
    console.log(posts)
    return knex('posts').insert(posts)
  }).then(data => {
    console.log(data)
  })
};
