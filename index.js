const express = require('express');
const { faker } = require('./node_modules/@faker-js/faker/');


const app = express();
const port = 3000;

/***
 * Creas una ruta
 * podemos retornar diferentes formatos, por ejemplo un json
*/
app.get('/', (req, res) => {
  res.send('Hola mi server en express');
});


app.get('/nueva-ruta/prueba', (req, res) => {
  res.send('Hola soy una nueva ruta');
});


//endpoint de productos
app.get('/productos', (req, res) => {
  const { num_productos } = req.query;

  /**
   * Si no se recibe el numero de productos
   * por defecto se le asigna 10
   */
  const limite = num_productos || 10;

  const productos = [];

    for (let index = 0; index < limite; index++) {
      productos.push({
        nombre: faker.commerce.productName(),
        precio: parseInt(faker.commerce.price(), 10),
        imagen: faker.commerce.productDescription(),
      });
    }

  res.json(productos);
});



/***
 * Al añadir los dos puntos en la ruta como en el siguiente
 * ejemplo, nosotros estamos espeicificando que queremos
 * recibir un parametro.
*/
app.get('/producto/:id_producto', (req, res) => {
  //Asi recibimos el parametro (forma humilde)
  const id_producto = req.params.id_producto;
  //Forma pro
  // const { id_producto } = req.params;
  res.json([
    {
      id_producto,
      nombre: 'Libreta',
      precio: 20.00,
    },
  ]);
});



app.get('/categorias/:id_categoria/producto/:id_producto', (req, res) => {
  const { id_categoria, id_producto } = req.params;

  res.json([
    {
      id_categoria,
      id_producto
    }
  ]);
});



/**
 * Parametros tipo query
 * Como el parametro es opcional, no viene especificado en la ruta.
 * En lugar de obtener los parametros desde el objeto param, los obtenemos con el
 * objeto query.
 */

app.get('/usuarios', (req, res) => {
  const { limite, desplazamiento } = req.query;

  if(limite &&  desplazamiento) {
    res.json([
      {
        limite,
        desplazamiento
      }
    ]);
  } else {
    res.send("No hay parametros");
  }
});



//Espera a que el servidor reciba una solicitud por el puerto que le asignamos
app.listen(port, () => {
  console.log('Mi puerto: ' + port);
});

