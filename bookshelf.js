const knexfile  = require('./knexfile.js');
const config    = knexfile['development'];  // ToDo Add env var here
const knex      = require('knex')(config);
const bookshelf = require('bookshelf')(knex);

module.exports = bookshelf;