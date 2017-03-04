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

const PORT = process.env.PORT || '3001';

app.listen(PORT, () =>
  console.log('Koa2 server running on localhost:' + PORT)
);

module.exports.default = app;