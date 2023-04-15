//Generamos un router especifico para los productos

const express = require('express');
const router = express.Router();

const ProductoServicio = require("../services/productoServicio.js");
const productos = new ProductoServicio();


router.get('/', async (req, res) => {
  const productos_disponibles = await productos.buscar();
  res.json(productos_disponibles);
});



router.post('/', async (req, res) => {
  res.status(201).json(await productos.crear(req.body));
});


router.patch('/:id_producto', async (req, res) => {
  try {
    const { id_producto } = req.params;
    const body = req.body;
    const info = await productos.actualizar(id_producto, body);
    res.json(info);
  } catch (error) {
    res.status(404).json({
      message: error.message
    });
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


router.get('/buscar/:id_producto', async (req, res) => {
  const id_producto = await req.params.id_producto;
  res.json(productos.buscarUno(id_producto));
});

module.exports = router;
