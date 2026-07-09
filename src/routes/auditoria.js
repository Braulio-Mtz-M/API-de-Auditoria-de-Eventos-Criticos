const express = require('express');
const router = express.Router();
const auditController = require('../controllers/auditoriaController');

router.post('/', auditController.crearAuditoria);
router.get('/', auditController.obtenerAuditorias);
router.put('/:id', auditController.actualizarAuditoria);
router.delete('/:id', auditController.eliminarAuditoria);

module.exports = router;