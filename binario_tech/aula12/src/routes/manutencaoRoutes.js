const express = require('express');
const router = express.Router();
const manutencaoController = require('../controllers/manutencaoController');

router.post('/', manutencaoController.criar);
router.get('/', manutencaoController.listarComFiltros);
router.post('/:id/pecas', manutencaoController.adicionarPeca); // EXERCÍCIO 2
router.patch('/:id/status', manutencaoController.atualizarStatus);
router.delete('/:id', manutencaoController.excluir);

module.exports = router;
