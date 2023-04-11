const { faker } = require('../node_modules/@faker-js/faker');

class UsuariosServicio {
  constructor(){
    this.usuarios = [];
    this.generarUsuarios();
  }

  generarUsuarios(){
    for (let index = 0; index < 30; index++) {
      this.usuarios.push({
        id_usuario: faker.datatype.uuid(),
        nombre: faker.name.fullName(),
        genero: faker.name.gender(),
        profesion: faker.name.jobTitle(),
      });
    }
  }

  obtenerUsuarios(){
    return this.usuarios;
  }

  obtenerUno(id_usuario){
    return this.usuarios.find((usuario) => usuario.id_usuario === id_usuario);
  }

  crear(){

  }

  actualizar(){

  }

  eliminar(){

  }
}

module.exports = UsuariosServicio;
