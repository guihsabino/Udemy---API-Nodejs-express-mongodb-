const express = require('express');
const router = express.Router();

router.get('/', (req, resp) => {
    return resp.send({ message: 'Tudo ok com o método GET da raiz!' });
});

router.post('/', (req, resp) => {
    return resp.send({ message: 'Tudo ok com o método POST da raiz!' });
});

module.exports = router;