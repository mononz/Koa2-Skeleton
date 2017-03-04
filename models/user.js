let bookshelf = require('../bookshelf');

let model = bookshelf.Model.extend({
  tableName: 'user',
  idAttribute: 'user_id',
  hasTimestamps: true
});

module.exports = model;