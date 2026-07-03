const AuditLog = require('../models/auditoria');

// POST /api/auditorias
const crearAuditoria = async (req, res) => {
    try {
        const nuevaAuditoria = new AuditLog(req.body);
        await nuevaAuditoria.save();
        
        res.json(nuevaAuditoria);
    } catch (error) {
        res.status(400).json({ error: 'Error al registrar la auditoría' });
    }
};

// GET /api/auditorias
const obtenerAuditorias = async (req, res) => {
    try {
        const logs = await AuditLog.find();
        res.json(logs);
    } catch (error) {
        res.status(400).json({ error: 'Error al obtener las bitácoras' });
    }
};

module.exports = {
    crearAuditoria,
    obtenerAuditorias
};