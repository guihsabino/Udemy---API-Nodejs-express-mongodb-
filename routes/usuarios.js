const express = require('express');
const router = express.Router();
const Users = require('../model/usuario');

router.get('/', (req, resp) => {
    Users.find({}, (err, dados) => {
        if (err) return resp.send({ error: 'Erro na consulta de usuários!' })
        return resp.send(dados);
    })
});

router.post('/create', (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) return resp.send({ error: 'Dados Incompletos' });

    Users.findOne({ email }, (err, dados) => {
        if (err) return resp.send({ error: 'Erro ao buscar usuário!' });
        if (dados) return resp.send({ error: 'Usuário já registrado!' });

        Users.create(req.body, (err, dados) => {
            if (err) return resp.send({ error: 'Erro ao criar usuário!' });
            return res.send(dados);
        })
    });

});

module.exports = router;

