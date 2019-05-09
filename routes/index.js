const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');

router.get('/', auth, (req, resp) => {
    console.log(resp.locals.auth_data);
    return resp.send({
        message: 'Aqui envia informações importantes do usuário, necessária autenticação com elevação de permissões!'
    });
});

router.post('/', (req, resp) => {
    return resp.send({
        message: 'Tudo ok com o método POST da raiz!'
    });
});

module.exports = router;