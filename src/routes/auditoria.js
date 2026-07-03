const express = require('express');
const router = express.Router();
const auditController = require('../controllers/auditoriaController');

router.post('/crear', auditController.crearAuditoria);
router.get('/obtener', auditController.obtenerAuditorias);

module.exports = router;