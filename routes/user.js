const Router  = require('koa-router');
const router  = new Router({ prefix: '/user' });

const User    = require('../models/user');


/**
 * User_Create
 *
 * @api {post} /user/ User_Create
 * @apiGroup User
 *
 * @apiError (Status Codes) 204 - Missing params
 *
 */
router.post('/', async ctx => {
  ctx.status = 200;
  ctx.body   = 'User_Create';
});

/**
 * User_Read
 *
 * @api {post} /user/:id User_Read
 * @apiGroup User
 *
 * @apiError (Status Codes) 404 - Invalid User
 *
 */
router.get('/:id', ctx => {
  ctx.status = 200;
  ctx.body   = 'User_Read';
});

/**
 * User_Read_All
 *
 * @api {post} /user/ User_Read
 * @apiGroup User
 *
 */
/*router.get('/', async ctx => {
  console.log('hi');
  ctx.status = 200;
  ctx.body   = 'User_Read_All';
});*/

router.get('/', function(ctx, next) {
  ctx.status = 200;
  ctx.body   = 'User_Read_All';
});

/**
 * User_Update
 *
 * @api {put} /user/:id User_Update
 * @apiGroup User
 *
 * @apiError (Status Codes) 404 - Invalid User
 *
 */
router.put('/:id', ctx => {
  ctx.status = 200;
  ctx.body   = 'User_Update';
});

/**
 * User_Delete
 *
 * @api {delete} /user User_Delete
 * @apiGroup User
 *
 * @apiError (Status Codes) 404 - Invalid User
 *
 */
router.del('/:id', ctx => {
  ctx.status = 200;
  ctx.body   = 'User_Delete';
});

module.exports = router;