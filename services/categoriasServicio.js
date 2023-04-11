const { faker } = require('../node_modules/@faker-js/faker');

class CategoriaServicio {

  constructor(){
    this.categorias = [];
    this.generarCategorias();
  }

  generarCategorias(){
    for (let index = 0; index < 30; index++) {
      this.categorias.push({
        id_categoria: faker.datatype.uuid(),
        categoria: faker.commerce.department(),
      });
    }
  }

  crear(){

  }

  buscar(){
    return this.categorias;
  }

  buscarUna(id_categoria) {
    return this.categorias.find((item) => item.id_categoria === id_categoria);
  }

  actualizar(){

  }

  eliminar(){

  }

}

module.exports = CategoriaServicio;
