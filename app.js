const Koa = require('koa');

const app = new Koa();

// response
app.use(ctx => {
  ctx.body = 'Hello Koa';
});

console.log('Visit localhost:3000 in your favourite browser');

app.listen(3000);

module.exports.default = app;