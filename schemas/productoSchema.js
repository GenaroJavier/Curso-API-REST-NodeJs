const joi = require('../node_modules/joi');

const id_producto = joi.string().uuid();
const nombre = joi.string().min(3).max(15);
const precio = joi.number().integer().min(10);
const imagen = joi.string().uri();
// const estatus = joi.string().uuid();

const crearProductoSchema = new joi.object({
  nombre: nombre.required(),
  precio: precio.required(),
  imagen: imagen.required(),
});

const actualizarProductoSchema = new joi.object({
  nombre: nombre,
  precio: precio,
  imagen: imagen,
});

const obtenerIdProductoSchema = new joi.object({
  id_producto: id_producto.required(),
});

module.exports = { crearProductoSchema, actualizarProductoSchema, obtenerIdProductoSchema };
