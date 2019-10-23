const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    const headerAuth = req.get('Authorization');

    if(!headerAuth){
        const error = new Error('No está autorizado');
        error.statusCode = 401;
        throw error;
    }

    const token = headerAuth.split(' ')[1];
    let decodedToken;
    try {
        decodedToken = jwt.verify(token, 'eh el secreto de amor')
    } catch (error) {
        error.statusCode = 500;
        throw error;
    }
    if(!decodedToken){
        const error = new Error('No está autenticado');
        error.statusCode = 401;
        throw error;
    }
    req.userId = decodedToken.userId;
    next();
};