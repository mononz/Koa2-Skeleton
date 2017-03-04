// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename:  './development.sqlite3'
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  staging: {
    client: 'sqlite3',
    connection: {
      filename:  './staging.sqlite3'
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'sqlite3',
    connection: {
      filename:  './production.sqlite3'
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }
};
