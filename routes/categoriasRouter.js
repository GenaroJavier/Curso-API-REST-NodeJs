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


module.exports = router;
