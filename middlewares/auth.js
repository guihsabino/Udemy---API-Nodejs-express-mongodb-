const jwt = require('jsonwebtoken');
const config = require('../config/config');

const auth = (req, resp, next) => {
    // Verificando se usuário deve ter acesso a essa informação
    const token_header = req.headers.auth;
    if (!token_header) return resp.status(401).send({ error: 'Token não enviado!' });

    jwt.verify(token_header, config.jwt_passw, (err, decoded) => {

        if (err) return resp.status(401).send({ error: 'Token inválido!' });
        // Local aonde foi guardado o id
        resp.locals.auth_data = decoded;
        return next();
    })
}

module.exports = auth;