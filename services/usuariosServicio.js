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

  crear(data){
    const nuevo_usuario = {
      id_usuario: faker.datatype.uuid(),
      ...data,
    }
    this.usuarios.push(nuevo_usuario);
    return nuevo_usuario;
  }

  actualizar(id_usuario, cambios){
    const index = this.usuarios.findIndex(item => item.id_usuario === id_usuario);

    if(index === -1){
      throw new Error("Usuario no encontrado");
    }

    const usuario_a_actualizar = this.usuarios[index];

    this.usuarios[index] = {
      ...usuario_a_actualizar,
      ...cambios
    }

    return this.usuarios[index];
  }

  eliminar(id_usuario){
    const index = this.usuarios.findIndex(item => item.id_usuario === id_usuario);
    if(index === -1){
      throw new Error("Usuario no encontrado");
    }

    this.usuarios.splice(index, 1);
    return { id_usuario };
  }
}

module.exports = UsuariosServicio;
