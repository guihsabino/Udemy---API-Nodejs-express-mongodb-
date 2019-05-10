// Se o desenvolvedor não setar essa variavel NODE_ENV, ele assume que é desenvolvimento
const env = process.env.NODE_ENV || 'dev';

const config = () => {
    // Desenvolvimento, homologação e produção
    switch (env) {
        case 'dev': return {
            bd_string: 'mongodb+srv://admin_user:admin123@clusterapiudemy-s4efd.mongodb.net/test?retryWrites=true',
            jwt_passw: 'batman2019',
            jwt_expira_em: '1d'
        }
        case 'hml': return {
            bd_string: 'mongodb+srv://admin_user:admin123@clusterapiudemy-s4efd.mongodb.net/test?retryWrites=true',
            jwt_passw: 'batman2019',
            jwt_expira_em: '1d'
        }
        case 'prod': return {
            bd_string: 'mongodb+srv://admin_user:admin123@clusterapiudemy-s4efd.mongodb.net/test?retryWrites=true',
            jwt_passw: 'batman2019',
            jwt_expira_em: '1d'
        }
    }
}
console.log(`API iniciada em ambiente  + ${env.toLocaleUpperCase()}`);

module.exports = config();