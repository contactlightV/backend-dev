const productsRouter = require('./productsRoute')
const usersRouter = require('./usersRoute');
const categoriesRouter = require('./categoriesRoute');
const express = require('express');

function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router);

  router.use('/products', productsRouter);
  router.use('/users', usersRouter);
  router.use('/categories', categoriesRouter);
}

module.exports = routerApi;
