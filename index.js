const express = require('express');

const app = express();
const port = 3000;

/***
 * Creas una ruta
 * podemos retornar diferentes formatos, por ejemplo un json
*/
app.get('/', (req, res) => {
  res.send('Hola mi server en express');
});

app.get('/nueva-ruta', (req, res) => {
  res.send('Hola soy una nueva ruta');
});

app.get('/productos', (req, res) => {
  res.json({
    jabon: 1,
    queso: 2,
    tomates: 3
  });
});


//Espera a que el servidor reciba una solicitud por el puerto que le asignamos
app.listen(port, () => {
  console.log('Mi puerto: ' + port);
});

