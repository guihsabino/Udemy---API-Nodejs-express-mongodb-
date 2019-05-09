const express = require('express');
const router = express.Router();

router.get('/', (req, resp) => {
    return resp.send({ message: 'Tudo ok com o método GET da raiz!' });
});

router.get('/users', (req, resp) => {
    return resp.send({ message: 'Tudo ok com o método GET de usuários!' });
});

module.exports = router;