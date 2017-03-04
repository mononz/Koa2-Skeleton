
let GENERAL   = 100;
let UPDATE    = 101;
let MISSING   = 102;
let NOT_FOUND = 103;

function errorBody(code, message) {
  return { code: code, message: message }
}

function missingParameters(ctx) {
  ctx.status = 400;
  ctx.body   = errorBody(MISSING, 'Missing parameters');
}

function nothingToUpdate(ctx) {
  ctx.status = 404;
  ctx.body   = errorBody(UPDATE, "Nothing to update");
}

function notFound(ctx, type) {
  ctx.status = 404;
  ctx.body   = errorBody(NOT_FOUND, type + " not found");
}

function unknown(ctx, error) {
  ctx.status = 400;
  ctx.body   = errorBody(GENERAL, error);
}

module.exports.missingParameters = missingParameters;
module.exports.nothingToUpdate = nothingToUpdate;
module.exports.notFound = notFound;
module.exports.unknown = unknown;