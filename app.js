const express = require('express');
const app = express();

const indexRoute = require('./rotas/index');
const usersRoute = require('./rotas/index');

app.use('/', indexRoute);
app.use('/users', usersRoute);

app.listen(3000);

module.exports = app;

