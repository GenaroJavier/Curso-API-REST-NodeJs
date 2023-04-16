const express = require('express');
const routerApi = require('./routes');
const { capturarErrores, mostrarErrores, errorBoom } = require('./middlewares/errorHandler.js');
const cors = require('./node_modules/cors');

const app = express();
const port = 3000;
app.use(express.json());
app.use(cors());

app.listen(port, () => {
  console.log('Mi puerto: ' + port);
});


routerApi(app);

app.use(capturarErrores);
app.use(errorBoom);
app.use(mostrarErrores);

/**
 * en el orden que coloquemos los middlewares,
 * será el orden en el que se ejecuten en el servidor
 */
