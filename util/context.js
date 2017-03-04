
function bodyGetSingle(ctx, param) {
  return ctx.request.body[param];
}

function bodyContainsSingle(ctx, param) {
  return (ctx.request.body.hasOwnProperty(param));
}

function bodyContainsAll(ctx, params) {
  let contains = 0;
  params.forEach(function (param) {
    if (bodyContainsSingle(ctx, param)) {
      contains++;
    }
  });
  return (contains == params.length);
}

module.exports.bodyGetSingle = bodyGetSingle;
module.exports.bodyContainsSingle = bodyContainsSingle;
module.exports.bodyContainsAll = bodyContainsAll;