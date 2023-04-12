const express = require('express');
const router = express.Router();

const CategoriaServicio = require("../services/categoriasServicio");
const Categorias = new CategoriaServicio;

router.get('/', (req, res) => {
  res.json(Categorias.buscar());
});

router.get('/buscar/:id_categoria', (req, res) => {
  const id_categoria = req.params.id_categoria;
  res.json(Categorias.buscarUna(id_categoria));
});

router.post('/', (req, res) => {
  const body = req.body;
  res.json(Categorias.crear(body));
});

router.patch('/:id_categoria', (req, res) => {
  const { id_categoria } = req.params;
  const body = req.body;
  res.json(Categorias.actualizar(id_categoria, body));
});

router.delete('/:id_categoria', (req, res) => {
  const { id_categoria } = req.params;
  res.json(Categorias.eliminar(id_categoria));
});
module.exports = router;

