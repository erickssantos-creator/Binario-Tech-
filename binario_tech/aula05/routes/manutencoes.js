const express = require('express');
const router = express.Router();

let manutencoes = [
    { id: 1, veiculoId: 1, descricao: "Troca de oleo e filtros", valor: 850.00, status: "CONCLUIDO" },
    { id: 2, veiculoId: 2, descricao: "Alinhamento e balanceamento", valor: 450.00, status: "EM_ANDAMENTO" }
];

// GET /api/v1/manutencoes
router.get('/', (req, res) => {
    res.status(200).json(manutencoes);
});

// POST /api/v1/manutencoes
router.post('/', (req, res) => {
    const { veiculoId, descricao, valor } = req.body;

    if (!veiculoId || !descricao || !valor) {
        return res.status(400).json({ erro: "Campos 'veiculoId', 'descricao' e 'valor' sao obrigatorios." });
    }

    const novaManutencao = {
        id: manutencoes.length + 1,
        veiculoId,
        descricao,
        valor,
        status: "AGENDADO"
    };

    manutencoes.push(novaManutencao);
    res.status(201).json(novaManutencao);
});

module.exports = router;
