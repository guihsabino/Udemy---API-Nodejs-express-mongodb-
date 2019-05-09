const jwt = require('jsonwebtoken');

const auth = (req, res, next) => {
    // Verificando se usuário deve ter acesso a essa informação
    const token_header = req.headers.auth;
    if (!token_header) return Response.send({ error: 'Token não enviado!' });

    jwt.verify(token_header, 'batman2019', (err, decoded) => {

        if (err) return Response.send({ error: 'Token inválido!' });
        // Local aonde foi guardado o id
        resp.locals.auth_data = decoded;
        return next();
    })
}

module.exports = auth;