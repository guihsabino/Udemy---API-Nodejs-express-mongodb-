const express = require('express');
const router = express.Router();

router.get('/', (req, resp) => {
    return resp.send({ message: 'Tudo ok com o método GET de usuários!' });
});

router.post('/', (req, resp) => {
    return resp.send({ message: 'Tudo ok com o método POST de usuários!' });
});

router.post('/create', (req, res) => {
    return resp.send({ message: 'Seu usuário foi criado = ' });
});

module.exports = router;

