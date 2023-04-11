const express = require('express');
const router = express.Router();

const UsuariosServicio = require('../services/usuariosServicio');
const Usuario = new UsuariosServicio();

router.get('/', (req, res) => {
  res.json(Usuario.obtenerUsuarios());
});

router.get('/buscar/:id_usuario', (req, res) => {
  const id_usuario = req.params.id_usuario;
  res.json(Usuario.obtenerUno(id_usuario));
});

module.exports = router;
