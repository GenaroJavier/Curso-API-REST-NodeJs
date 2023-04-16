const { faker } = require('../node_modules/@faker-js/faker');
const Boom = require('@hapi/boom');

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
          estatus: faker.datatype.boolean(),
        });
      }
  }

  async crear(data){
    const nuevo_producto = {
      id_producto: faker.datatype.uuid(),
      ...data,
    }
    this.productos.push(nuevo_producto);
    return nuevo_producto;
  }

  async buscar(){
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.productos);
      }, 1000);
    })
  }

  async buscarUno(id_producto){
    const producto = this.productos.find((item) => item.id_producto === id_producto);
    if(!producto){
      throw Boom.notFound('No se ha encontrado el producto');
    }

    if(!producto.estatus) {
      throw Boom.conflict('El producto no esta disponible');
    }

    return producto;
  }

  /**
   * Aqui nosotros como tal "sembramos el error"
   * pero debemos capturarlo y eso lo hace el routing
   */

  async actualizar(id_producto, cambios){
    const index = this.productos.findIndex(item => item.id_producto === id_producto);

    if(index === -1){
      throw Boom.notFound('No se ha encontrado el producto');
    }

    const producto_a_actualizar = this.productos[index];
    this.productos[index] = {
      ...producto_a_actualizar,
      ...cambios
    }

    return this.productos[index];
  }

  async eliminar(id_producto){
    const index = this.productos.findIndex(item => item.id_producto === id_producto);
    if(index === -1){
      throw Boom.notFound('No se ha encontrado el producto');
    }

    this.productos.splice(index, 1);
    return { id_producto };
  }
}

module.exports = ProductoServicio;
