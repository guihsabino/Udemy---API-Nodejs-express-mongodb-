const express = require('express');
const router = express.Router();
const Users = require('../model/usuario');
const bcrypt = require('bcrypt');

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

            DataCue.password = undefined;
            return res.send(dados);
        })
    });

});

// Verificando a autenticação
router.post('/auth', (req, resp) => {
    const { emai, password } = req.body;

    if (!email || !password) rturn resp.send({ error: 'Dados incompletos!' });

    Users.findOne({ email }, (err, dados) => {
        if (err) return resp.send({ error: 'Erro ao buscar usuário!' });
        if (!dados) return resp.send({ error: 'Usuário não registrado!' });

        // Same valida se a senha bateu
        bcrypt.compare(password, data.password, (er, same) => {
            if (!same) return resp.send({ error: 'Erro ao autenticar usuário!' })

            dados.password = undefined;
            return resp.send(dados);
        })
    }).select('+password'); // Essa linha obriga a trazer a senha do usuário
});

module.exports = router;

