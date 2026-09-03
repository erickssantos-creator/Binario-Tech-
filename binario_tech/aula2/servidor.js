const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

// Rota 1: /status
app.get('/status', (req, res) => {
  res.json({ 
    status: "OK", 
    servidor: "Ativo" 
  });
});

// Rota 2: /scania/info
app.get('/scania/info', (req, res) => {
  res.json({
    montadora: "Scania",
    foco: "Caminhoes Pesados e Onibus",
    sistema_telemetria: "Ativo",
    unidades_conectados: 1420
  });
});

// Rota 3: /vw/info
app.get('/vw/info', (req, res) => {
  res.json({
    montadora: "Volkswagen",
    modelo: "Delivery",
    sistema_telemetria: "Manutencao"
  });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando com sucesso na porta ${PORT}`);
});
