const express = require('express');
const router = express.Router();
const veiculosController = require('../controllers/veiculosController');

router.get('/', veiculosController.ListarTodos);
router.get('/:id', veiculosController.buscarPorId);
router.post('/', veiculosController.criar);

// EXERCÍCIO 2: Rota PATCH /:id/status
router.patch('/:id/status', veiculosController.atualizarStatus);

module.exports = router;
