const express = require('express');
const router = express.Router();
const { registrar, login } = require('../controllers/authController');
const validarJWT = require('../middlewares/validarJWT');

router.post('/register', registrar);
router.post('/login', login);
router.get('/relatorio', validarJWT, (req, res) => {
  res.json({ mensagem: 'Acesso liberado', usuario: req.usuario });
});

module.exports = router;
