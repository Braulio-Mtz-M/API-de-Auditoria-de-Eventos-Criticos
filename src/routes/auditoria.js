const express = require('express');
const router = express.Router();
const auditController = require('../controllers/auditoriaController');

const verificarJWT = require('../middlewares/authMiddleware');

// Ruta PÚBLICA para generar el JWT de este proyecto
router.post('/login', auditController.login);
// Protegemos todas las rutas pasándole 'verificarJWT'
router.post('/', verificarJWT, auditController.crearAuditoria);
router.get('/', verificarJWT, auditController.obtenerAuditorias);
router.put('/:id', verificarJWT, auditController.actualizarAuditoria);
router.delete('/:id', verificarJWT, auditController.eliminarAuditoria);

module.exports = router;