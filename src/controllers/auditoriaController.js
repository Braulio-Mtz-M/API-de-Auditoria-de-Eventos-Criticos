const AuditLog = require('../models/auditoria');

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

module.exports = { crearAuditoria, obtenerAuditorias, actualizarAuditoria, eliminarAuditoria };