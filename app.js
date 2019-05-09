const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');


const url = 'mongodb+srv://admin_user:<admin123>@clusterapiudemy-s4efd.mongodb.net/test?retryWrites=true'
const opcoes = { reconnectTries: Number.MAX_VALUE, reconnectInterval: 500, poolSize: 5, useNewParser: true };

// Conectando com o que criei acima
mongoose.connect(url, opcoes);
mongoose.set('useCreateIndex', true);

// Tratamento após ficar ouvindo, e me avisar se algo alterar
mongoose.connect.on('error', (err) => {
    console.log('Erro na conexão com BD: ' + err);
});

mongoose.connect.on('disconnected', () => {
    console.log('Aplicação desconectada do BD!');
});

mongoose.connect.on('connected', () => {
    console.log('Aplicação conectada ao BD com sucesso!');
});

// Body Parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const indexRoute = require('./routes/index');
const usersRoute = require('./routes/index');

app.use('/', indexRoute);
app.use('/users', usersRoute);

app.listen(3000);

module.exports = app;