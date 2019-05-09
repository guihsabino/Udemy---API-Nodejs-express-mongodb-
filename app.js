const express = require('express');
const app = express();

app.get('/', (req, resp) => {
    return resp.send({ message: 'Tudo ok com o método GET!' })
});

app.post('/', (req, resp) => {
    return resp.send({ message: 'Tudo ok com o método POST!' })
});

app.listen(3000);

module.exports = app;

