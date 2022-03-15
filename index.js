const express = require('express');
const routerApi = require('./routes');
const { logErrors, errorHandler, boomErrorHandler } = require('./middlewares/errorHandle')

const app= express();
const port = 3000;

app.use(express.json());

routerApi(app);

app.use(boomErrorHandler);
app.use(logErrors);
app.use(errorHandler);


app.listen(port, () => {
    console.log('Mi port ' + port);
});
