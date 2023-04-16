//Generamos un router especifico para los productos

const express = require('express');
const router = express.Router();

const ProductoServicio = require("../services/productoServicio.js");
const productos = new ProductoServicio();

//Validaciones
const { validarHandler } = require('../middlewares/validarHandler.js');
const { obtenerIdProductoSchema, actualizarProductoSchema, crearProductoSchema } = require('../schemas/productoSchema.js');

router.get('/', async (req, res) => {
  const productos_disponibles = await productos.buscar();
  res.json(productos_disponibles);
});

router.post('/',
validarHandler(crearProductoSchema, 'body'),
async (req, res) => {
  res.status(201).json(await productos.crear(req.body));
});


router.patch('/:id_producto',
validarHandler(obtenerIdProductoSchema, 'params'),
validarHandler(actualizarProductoSchema, 'body'),
async (req, res, next) => {
  try {
    const { id_producto } = req.params;
    const body = req.body;
    const info = await productos.actualizar(id_producto, body);
    res.json(info);
  } catch (error) {
    next(error);
  }
});


router.put('/:id_producto', async (req, res) => {
  const { id_producto } = req.params;
  const body = req.body;
});

router.delete('/:id_producto', async (req, res) => {
  const { id_producto } = req.params;
  res.json(await productos.eliminar(id_producto));
});


router.get('/:id_producto',
validarHandler(obtenerIdProductoSchema, 'params'),
async (req, res, next) => {
  try {
    const { id_producto } = req.params;
    res.json(await productos.buscarUno(id_producto));
  } catch (error) {
    next(error);
  }
});

module.exports = router;
