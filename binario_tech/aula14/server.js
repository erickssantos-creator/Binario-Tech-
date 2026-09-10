require('dotenv').config();
const express = require('express');
const cors = require('cors');
const authRoutes = require('./src/routes/authRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Mapeamento principal das rotas de autenticação
app.use('/api/v1/auth', authRoutes);

// Middleware para capturar rotas não encontradas (404)
app.use((req, res) => {
  res.status(404).json({
    status: "NAO_ENCONTRADO",
    mensagem: "Endpoint não encontrado na API."
  });
});

app.listen(PORT, () => {
  console.log(`[Binário Tech] Servidor rodando na porta ${PORT}`);
});
