const express = require('express');
const cors = require('cors');
const veiculosRoutes = require('./src/routes/veiculosRoutes');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// Aceita as rotas /api/vl/veiculos e /api/v1/veiculos
app.use('/api/vl/veiculos', veiculosRoutes);
app.use('/api/v1/veiculos', veiculosRoutes);

// Middleware para rotas não encontradas (404)
app.use((req, res) => {
  res.status(404).json({ erro: "Rota nao encontrada no servidor Binario Tech." });
});

app.listen(PORT, () => {
  console.log(`[Binario Tech] Servidor ativo na porta ${PORT}`);
});
