const express = require('express');
const cors = require('cors');
const frotaRoutes = require('./src/routes/frotaRoutes');
const tratarErros = require('./src/middlewares/tratarErros');

const app = express();
const PORT = 3009;

app.use(cors());
app.use(express.json());

// Log de diagnóstico para ver se a requisição chega
app.use((req, res, next) => {
  console.log(`[REQUISIÇÃO RECEBIDA]: ${req.method} ${req.url}`);
  next();
});

app.use('/api/v1/frota', frotaRoutes);

app.use((req, res) => {
  res.status(404).json({ erro: "Rota não encontrada no servidor." });
});

app.use(tratarErros);

app.listen(PORT, () => {
  console.log(`[Binário Tech] Servidor da Aula 10 ativo na porta ${PORT}`);
});
