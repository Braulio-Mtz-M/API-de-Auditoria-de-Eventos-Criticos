const jwt = require('jsonwebtoken');

const verificarJWT = (req, res, next) => {
    const authHeader = req.header('Authorization');

    if (!authHeader) {
        return res.status(401).json({ error: 'Acceso denegado. Se requiere un token.' });
    }

    const token = authHeader.split(' ')[1];

    try {
        const decodificado = jwt.verify(token, process.env.JWT_SECRET);
        req.usuario = decodificado;
        next();
    } catch (error) {
        res.status(403).json({ error: 'Token inválido o corrupto.' });
    }
};

module.exports = verificarJWT;