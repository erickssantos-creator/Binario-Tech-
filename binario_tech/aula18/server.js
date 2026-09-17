const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const provaRoutes = require('./src/routes/provaRoutes');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/v1/prova', provaRoutes);

const PORT = process.env.PORT || 3009;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/binario_tech_prova';

mongoose.connect(MONGO_URI, { serverSelectionTimeoutMS: 5000 })
  .then(() => {
    console.log('Conectado ao MongoDB');
    app.listen(PORT, () => {
      console.log(`Servidor rodando na porta ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('Erro ao conectar ao MongoDB:', err.message);
  });
