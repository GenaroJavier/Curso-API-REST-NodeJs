const { faker } = require('../node_modules/@faker-js/faker');

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

  crear(data){
    const nuevo_producto = {
      id_producto: faker.datatype.uuid(),
      ...data,
    }
    this.productos.push(nuevo_producto);
    return nuevo_producto;
  }

  buscar(){
    return this.productos;
  }

  buscarUno(id_producto){
    return this.productos.find((item) => item.id_producto === id_producto);
  }

  actualizar(id_producto, cambios){
    const index = this.productos.findIndex(item => item.id_producto === id_producto);

    if(index === -1){
      throw new Error("Producto no encontrado");
    }

    const producto_a_actualizar = this.productos[index];
    this.productos[index] = {
      ...producto_a_actualizar,
      ...cambios
    }

    return this.productos[index];
  }

  eliminar(id_producto){
    const index = this.productos.findIndex(item => item.id_producto === id_producto);
    if(index === -1){
      throw new Error("Producto no encontrado");
    }

    this.productos.splice(index, 1);
    return { id_producto };
  }
}

module.exports = ProductoServicio;
