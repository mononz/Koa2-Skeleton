const Koa        = require('koa');
const qs         = require('koa-qs');
const logger     = require('koa-logger');
const bodyParser = require('koa-bodyparser');

const routeUser  = require('./routes/user');

const app = new Koa();

qs(app);
app.use(bodyParser());
app.use(logger());

app.use(routeUser.routes());

app.listen(3000, () =>
  console.log('Koa2 server running on localhost:3000')  // ToDo Add env var here
);

module.exports.default = app;