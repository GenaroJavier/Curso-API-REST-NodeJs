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

router.post('/', (req, res) => {
  const body = req.body;
  res.json(Usuario.crear(body));
});

router.patch('/:id_usuario', (req, res) => {
  const { id_usuario } = req.params;
  const body = req.body;

  if(index === -1){
    throw new Error("Producto no encontrado");
  }

  res.json(Usuario.actualizar(id_usuario, body));
});

router.delete('/:id_usuario', (req, res) => {
  const { id_usuario } = req.params;

  if(index === -1){
    throw new Error("Producto no encontrado");
  }

  res.json(Usuario.eliminar(id_usuario));
});

module.exports = router;
