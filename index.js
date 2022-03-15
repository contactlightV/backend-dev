const express = require('express');
const routerApi = require('./routes');
const cors = require('cors')

const { logErrors, errorHandler, boomErrorHandler } = require('./middlewares/errorHandle')

const app= express();
const port = 3000;

app.use(express.json());

routerApi(app);

const whitelist = ['http://localhost:8080', 'https://myapp.co'];
const options = {
  origin: (origin, callback) => {
    if (whitelist.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('not allowed'));
    }
  }
}
// middlewares
app.use(cors(options));
app.use(boomErrorHandler);
app.use(logErrors);
app.use(errorHandler);


app.listen(port, () => {
    console.log('Mi port ' + port);
});
