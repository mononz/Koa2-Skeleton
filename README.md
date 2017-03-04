# Koa2-Skeleton
Basic project using Node v7.1.1, knexjs, bookshelfjs to demonstrate a basic Koa2 api.

Project created using WebStorm 2016.3.2

#### Install & Run
```
  nvm use 7.1.1  // use node v7.1.1
  npm install    // install dependencies
  node app       // run with
```

#### Knex
```
  npm install -g knex         // install knex globally
  npm install sqlite3 --save  // install knex globally
  knex migrate:make user      // make a migration
  knex migrate:latest --env development
```

#### Notes
 - Ensure webstorm (or whatever editor you use) uses the Javascript language version of 'ECMAScript 6' to avoid lint errors
 - Use [nvm](https://github.com/creationix/nvm) so you can switch between node versions easily.