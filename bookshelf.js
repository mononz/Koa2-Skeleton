const knexfile  = require('./knexfile.js.template');

const NODE_ENV  = process.env.NODE_ENV || 'development';
const config    = knexfile[NODE_ENV];
const knex      = require('knex')(config);
const bookshelf = require('bookshelf')(knex);

console.log('Using environment: ' + NODE_ENV);

module.exports = bookshelf;