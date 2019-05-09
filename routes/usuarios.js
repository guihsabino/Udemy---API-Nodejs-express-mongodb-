const express = require('express');
const router = express.Router();
const Users = require('../model/usuario');
const bcrypt = require('bcrypt');

router.get('/', async (req, resp) => {
    try {
        const users = await Users.find({});
        return resp.send(users);
    } catch (err) {
        return resp.send({ error: 'Erro na consulta de usuários!' });
    }
});

router.post('/create', (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) return resp.send({ error: 'Dados Incompletos' });

    try {
        if (await Users.findOne({ email })) return resp.send({ error: 'Usuário já registrado!' });

        const user = await Users.create(req.body);
        user.password = undefined;
        return resp.send(user);

    } catch (err) {
        return resp.send({ error: 'Erro ao buscar usuário!' });
    }
});

// Verificando a autenticação
router.post('/auth', async (req, resp) => {
    const { emai, password } = req.body;

    if (!email || !password) return resp.send({ error: 'Dados incompletos!' });

    try {
        // Essa linha obriga a trazer a senha do usuário
        const user = await user.findOne({ email }).select('+password');
        if (!user) return resp.send({ error: 'Usuário não registrado!' });

        const pass_ok = await bcrypt.compare(password, user.password);

        if (!pass_ok) return resp.send({ error: 'Erro ao buscar usuário!' });

        user.password = undefined;
        return resp.send(user);


    } catch (err) {
        return resp.send({ error: 'Erro ao buscar usuário!' });
    }
});

module.exports = router;

