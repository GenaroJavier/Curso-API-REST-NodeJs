const { faker } = require('../node_modules/@faker-js/faker');
/**
 * Aqui se debe difinir toda la logina de negocio que deben de tener nuestros datos.
 * Por ejemplo ene este caso, crear o editar productos
*/
class ProductoServicio {

  constructor() {
    this.productos = [];
    this.generarProductos();
  }

  generarProductos() {
    const limite = 100;

      for (let index = 0; index < limite; index++) {
        this.productos.push({
          id_producto: faker.datatype.uuid(),
          nombre: faker.commerce.productName(),
          precio: parseInt(faker.commerce.price(), 10),
          imagen: faker.commerce.productDescription(),
        });
      }
  }

  crear(){

  }

  buscar(){
    return this.productos;
  }

  buscarUno(id_producto){
    return this.productos.find((item) => item.id_producto === id_producto);
  }

  actualizar(){

  }

  eliminar(){

  }

}

module.exports = ProductoServicio;
