const express = require('express');

const productosRouter = require('./productosRouter')
const categoriasRouter = require('./categoriasRouter')
const usuariosRouter = require('./usuariosRouter')

function routerApi(app) {
  const router_global = express.Router();
  app.use('/api_v1', router_global);
  router_global.use('/productos', productosRouter);
  router_global.use('/categorias', categoriasRouter);
  router_global.use('/usuarios', usuariosRouter);
}


module.exports = routerApi;
