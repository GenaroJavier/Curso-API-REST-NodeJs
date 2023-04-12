//Generamos un router especifico para los productos

const express = require('express');
const router = express.Router();

const ProductoServicio = require("../services/productoServicio.js");
const productos = new ProductoServicio();


router.get('/', (req, res) => {
  const productos_disponibles = productos.buscar();
  res.json(productos_disponibles);
});



router.post('/', (req, res) => {
  res.status(201).json(productos.crear(req.body));
});


router.patch('/:id_producto', (req, res) => {
  const { id_producto } = req.params;
  const body = req.body;
  const info = productos.actualizar(id_producto, body);
  res.json(info);
});


router.put('/:id_producto', (req, res) => {
  const { id_producto } = req.params;
  const body = req.body;
});

router.delete('/:id_producto', (req, res) => {
  const { id_producto } = req.params;
  res.json(productos.eliminar(id_producto));
});


router.get('/buscar/:id_producto', (req, res) => {
  const id_producto = req.params.id_producto;
  res.json(productos.buscarUno(id_producto));
});

module.exports = router;
