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


router.patch('/:id_producto', async (req, res, next) => {
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


router.get('/:id_producto', async (req, res, next) => {
  try {
    const id_producto = req.params.id_producto;
    res.json(await productos.buscarUno(id_producto));
  } catch (error) {
    next(error);
    /**
     * El manejo del middleware para los errores lo hace de manera automatica
     * pues al estar dentro del try sabe que ha ocurrido algo y va en busca
     * de los middlewares de tipo error que tenemos diponibles
     */
  }
});

module.exports = router;
