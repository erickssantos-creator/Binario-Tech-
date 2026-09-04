const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const autenticarToken = require('../middlewares/autenticarToken');
const autorizarPerfil = require('../middlewares/autorizarPerfil'); // Importa o novo middleware

// Rotas públicas
router.post('/register', authController.registrar);
router.post('/login', authController.login);

// Rotas privadas
router.get('/perfil', autenticarToken, authController.perfil);

// Rota restrita APENAS para perfil ADMIN
router.get('/admin', autenticarToken, autorizarPerfil(['ADMIN']), (req, res) => {
  res.status(200).json({ mensagem: "Acesso autorizado à área administrativa!" });
});

module.exports = router;
