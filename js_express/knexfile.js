// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

  development: {
    client: 'pg',
    connection: {
      database: 'express-rest-posts'
    },
    migrations: {
      tableName: 'migrations',
      directory: './db/migrations'
    },
    seeds: {
      directory: './db/seeds'
    }
  }


};



