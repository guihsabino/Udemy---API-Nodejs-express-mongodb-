const express = require('express');
const app = express();

app.get('/', (req, resp) => {
    let obj = req.query;
    return resp.send({ message: `Você enviou o nome ${obj.nome} com idade de ${obj.idade} anos!` });
});

app.post('/', (req, resp) => {
    return resp.send({ message: 'Tudo ok com o método POST!' })
});

app.listen(3000);

module.exports = app;

