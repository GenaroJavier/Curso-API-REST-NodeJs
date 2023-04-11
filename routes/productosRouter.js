//Generamos un router especifico para los productos

const express = require('express');
const router = express.Router();

const ProductoServicio = require("../services/productoServicio.js");
const productos = new ProductoServicio();

//endpoint de productos
router.get('/', (req, res) => {
  const productos_disponibles = productos.buscar();
  res.json(productos_disponibles);
});


/**
 * Petición post para crear un producto usando POST
 */
router.post('/', (req, res) => {
  const body = req.body;
  res.status(201).json({
    message: "Producto creado",
    data: body
  });
});

/**
 * Petición para actualizar un producto usando PATCH
 */
router.patch('/:id_producto', (req, res) => {
  const { id_producto } = req.params;
  const body = req.body;
  res.json({
    message: "Producto actualizado usando PATCH",
    id_producto: id_producto,
    data: body
  });
});

/**
 * Petición para actualizar un producto usando PUT
 */
router.put('/:id_producto', (req, res) => {
  const { id_producto } = req.params;
  const body = req.body;
  res.json({
    message: "Producto actualizado usando PUT",
    id_producto: id_producto,
    data: body
  });
});

/**
 * Petición para eliminar un producto
 */
router.delete('/:id_producto', (req, res) => {
  const { id_producto } = req.params;
  res.json({
    message: "Producto Eliminado",
    id_producto: id_producto,
  });
});


/***
 * Al añadir los dos puntos en la ruta como en el siguiente
 * ejemplo, nosotros estamos espeicificando que queremos
 * recibir un parametro.
*/
router.get('/buscar/:id_producto', (req, res) => {
  const id_producto = req.params.id_producto;
  res.json(productos.buscarUno(id_producto));
});

module.exports = router;
