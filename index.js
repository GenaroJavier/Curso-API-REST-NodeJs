const express = require('express');
const routerApi = require('./routes');
const { capturarErrores, mostrarErrores } = require('./middlewares/errorHandler.js');

const app = express();
const port = 3000;
app.use(express.json());

app.listen(port, () => {
  console.log('Mi puerto: ' + port);
});


routerApi(app);

app.use(capturarErrores);
app.use(mostrarErrores);

/**
 * en el orden que coloquemos los middlewares,
 * será el orden en el que se ejecuten en el servidor
 */
