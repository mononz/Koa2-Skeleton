
function requestBodyContainsSingle(ctx, param) {
  return (ctx.request.body.hasOwnProperty(param));
}

function requestBodyContainsAll(ctx, params) {
  let contains = 0;
  params.forEach(function (param) {
    if (requestBodyContainsSingle(ctx, param)) {
      contains = contains+1;
    }
  });
  return (contains == params.length);
}

module.exports.requestBodyContainsSingle = requestBodyContainsSingle;
module.exports.requestBodyContainsAll = requestBodyContainsAll;