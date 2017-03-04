const Router  = require('koa-router');
const router  = new Router({ prefix: '/user' });

const User    = require('../models/user');
const Context = require('../util/context');
const Error   = require('../util/error_handler');


/**
 * User_Create
 *
 * @api {post} /user/ User_Create
 * @apiGroup User
 *
 */
router.post('/', async (ctx, next) => {

  if (!Context.bodyContainsAll(ctx, ['first_name', 'last_name', 'email'])) {
    Error.missingParameters(ctx);
    return next();
  }

  let json = {
    first_name: ctx.request.body.first_name,
    last_name:  ctx.request.body.last_name,
    email:      ctx.request.body.email
  };

  await User.forge(json).save()
    .then(function (result) {
      ctx.status = 200;
      ctx.body = {
        success: true,
        user: {
          user_id: result.attributes.user_id
        }
      };
    })
    .catch(function (error) {
      Error.unknown(ctx, error)
    });
});

/**
 * User_Read
 *
 * @api {get} /user/:id User_Read
 * @apiGroup User
 *
 */
router.get('/:id', async (ctx, next) => {

  await new User()
    .query('where', 'user_id', ctx.params.id)
    .fetch()
    .then(function(data) {
      if (data != null) {
        ctx.body = data.toJSON()
      } else {
        Error.notFound(ctx, 'User')
      }
    })
    .catch(function (error) {
      Error.unknown(ctx, error)
    });
});

/**
 * User_Read_All
 *
 * @api {get} /user/ User_Read_All
 * @apiGroup User
 *
 */
router.get('/', async (ctx, next) => {

  await new User()
    .fetchAll({ columns: ['user_id', 'first_name', 'last_name'] })
    .then(function(data) {
      if (data != null) {
        ctx.body = data.toJSON()
      } else {
        Error.notFound(ctx, 'User')
      }
    })
    .catch(function (error) {
      Error.unknown(ctx, error)
    });
});

/**
 * User_Update
 *
 * @api {put} /user/:id User_Update
 * @apiGroup User
 *
 */
router.put('/:id', async (ctx, next) => {

  let json = {};

  if (Context.bodyContainsSingle(ctx, 'first_name')) {
    json['first_name'] = Context.bodyGetSingle(ctx, 'first_name')
  }
  if (Context.bodyContainsSingle(ctx, 'last_name')) {
    json['last_name'] = Context.bodyGetSingle(ctx, 'last_name')
  }
  if (Context.bodyContainsSingle(ctx, 'email')) {
    json['email'] = Context.bodyGetSingle(ctx, 'email')
  }

  if (json == {}) {
    Error.nothingToUpdate(ctx);
    return next();
  }

  await new User(json)
    .where({user_id: ctx.params.id})
    .save(null, {method: 'update'})
    .then(function () {
      ctx.body = {
        success: true,
        user: {
          user_id: ctx.params.id
        }
      };
    })
    .catch(function () {
      Error.notFound(ctx, 'User')
    });
});

/**
 * User_Delete_Hard
 *
 * @api {delete} /user User_Delete_Hard
 * @apiGroup User
 *
 */
router.del('/:id/hard', async (ctx, next) => {

  await new User()
    .query('where', 'user_id', ctx.params.id)
    .fetch()
    .then(function(data) {
      if (data != null) {
        return data.destroy().then(function() {
          ctx.body = {
            success: true,
            user: {
              user_id: ctx.params.id
            }
          };
        });
      } else {
        Error.notFound(ctx, 'User')
      }
    })
    .catch(function (error) {
      Error.unknown(ctx, error)
    });
});

/**
 * User_Disable
 *
 * @api {delete} /user User_Disable
 * @apiGroup User
 *
 */
router.del('/:id', async (ctx, next) => {

  let json = {
    deleted_at: Date.now()
  };

  await new User(json)
    .where({user_id: ctx.params.id})
    .save(null, {method: 'update'})
    .then(function () {
      ctx.body = {
        success: true,
        user: {
          user_id: ctx.params.id
        }
      };
    })
    .catch(function () {
      Error.notFound(ctx, 'User')
    });
});

module.exports = router;