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

  crear(data){
    const nueva_categoria = {
      id_categoria: faker.datatype.uuid(),
      ...data,
    };

    this.categorias.push(nueva_categoria);
    return nueva_categoria;
  }

  buscar(){
    return this.categorias;
  }

  buscarUna(id_categoria) {
    return this.categorias.find((item) => item.id_categoria === id_categoria);
  }

  actualizar(id_categoria, cambios){
    const index = this.categorias.findIndex(categoria => categoria.id_categoria === id_categoria);

    const categoria_a_actualizar = this.categorias[index];

    if(index === -1){
      throw new Error("Categoria no encontrado");
    }

    this.categorias[index] = {
      ...categoria_a_actualizar,
      ...cambios
    }

    return this.categorias[index];
  }

  eliminar(id_categoria){
    const index = this.categorias.findIndex(categoria => categoria.id_categoria === id_categoria);

    if(index === -1){
      throw new Error("Categoria no encontrado");
    }

    this.categorias.splice(index, 1);

    return { id_categoria };
  }

}

module.exports = CategoriaServicio;
