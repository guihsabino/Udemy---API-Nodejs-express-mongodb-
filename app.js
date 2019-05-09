const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const indexRoute = require('./rotas/index');
const usersRoute = require('./rotas/index');

app.use('/', indexRoute);
app.use('/users', usersRoute);

app.listen(3000);

module.exports = app;

//mongodb+srv://admin_user:<admin123>@clusterapiudemy-s4efd.mongodb.net/test?retryWrites=true