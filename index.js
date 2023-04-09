const express = require('express');
const routerApi = require('./routes');

const app = express();
const port = 3000;
app.use(express.json());

app.listen(port, () => {
  console.log('Mi puerto: ' + port);
});

routerApi(app);
