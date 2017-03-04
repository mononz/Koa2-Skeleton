
let CODE_MISSING_PARAMETERS = 101;

function errorBody(code, message) {
  return { code: code, message: message }
}

function missingParameters(ctx) {
  ctx.status = 400;
  ctx.body   = errorBody(CODE_MISSING_PARAMETERS, 'Missing parameters');
}

function unknown(ctx, error) {
  ctx.status = 400;
  ctx.body   = errorBody(CODE_MISSING_PARAMETERS, error);
}

module.exports.missingParameters = missingParameters;
module.exports.unknown = unknown;