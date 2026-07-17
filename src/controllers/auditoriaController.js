const jwt = require('jsonwebtoken');
const AuditLog = require('../models/auditoria');

const login = (req, res) => {
    const { usuario, password } = req.body;

    // Validamos contra las variables de entorno
    if (usuario === process.env.ADMIN_USER && password === process.env.ADMIN_PASSWORD) {
        // Generamos el token sin caducidad
        const token = jwt.sign({ rol: 'admin' }, process.env.JWT_SECRET);
        return res.json({ mensaje: 'Login de auditoría exitoso', token });
    }

    return res.status(401).json({ error: 'Credenciales inválidas' });
};

const crearAuditoria = async (req, res) => {
    try {
        const nuevaAuditoria = new AuditLog(req.body);
        await nuevaAuditoria.save();
        res.json(nuevaAuditoria);
    } catch (error) {
        res.status(400).json({ error: 'Error al crear la auditoría' });
    }
};

const obtenerAuditorias = async (req, res) => {
    try {
        const logs = await AuditLog.find();
        res.json(logs);
    } catch (error) {
        res.status(400).json({ error: 'Error al obtener auditorías' });
    }
};


const actualizarAuditoria = async (req, res) => {
    try {
        const log = await AuditLog.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(log);
    } catch (error) {
        res.status(400).json({ error: 'Error al actualizar la auditoría' });
    }
};

const eliminarAuditoria = async (req, res) => {
    try {
        await AuditLog.findByIdAndDelete(req.params.id);
        res.json({ mensaje: 'Auditoría eliminada' });
    } catch (error) {
        res.status(400).json({ error: 'Error al eliminar la auditoría' });
    }
};

module.exports = { login, crearAuditoria, obtenerAuditorias, actualizarAuditoria, eliminarAuditoria };