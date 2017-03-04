# Koa2-Skeleton
Basic project using Node v7.1.1, knexjs, bookshelfjs to demonstrate a basic Koa2 api.

Project created using WebStorm 2016.3.2

#### Install & Run
```
  // use node v7.1.1
  nvm use 7.1.1
  
  // install dependencies
  npm install
  
  // Make a copy of the knexfile
  cp knexfile.js.template knexfile.js
  
  // install knex package globally
  npm install -g knex
  
  // run with
  node app
```

#### Production

Use pm2 on production to manage the server. Launch with the yaml file. Make sure the path to the node binary is correct

```
  pm2 start process.yaml
```

#### Knex Migrations
```
  // make a migration
  knex migrate:make user
  
  // run migrations
  knex migrate:latest --env development  
```

#### Postman

Import the json dump from `/Koa2-Skeleton.postman_collection.json`. into postman to get testing. 

Don't use it? You should. Get it [here](https://www.getpostman.com/). 

#### Notes
 - Ensure webstorm (or whatever editor you use) uses the Javascript language version of 'ECMAScript 6' to avoid lint errors
 - Use [nvm](https://github.com/creationix/nvm) so you can switch between node versions easily.