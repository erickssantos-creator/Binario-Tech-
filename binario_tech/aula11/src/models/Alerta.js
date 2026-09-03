const mongoose = require('mongoose');

const alertaSchema = new mongoose.Schema({
  equipamentoTold: {
    type: String,
    required: [true, 'O ID do equipamento é obrigatório']
  },
  nivelSeveridade: {
    type: String,
    enum: ['BAIXO', 'MEDIO', 'CRITICO'],
    default: 'MEDIO'
  },
  temperaturaMedida: {
    type: Number,
    required: true
  },
  tags: [String], // <-- Exercício 2: Array de Strings
  metadados: {
    type: Map,
    of: String
  },
  registradoEM: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Alerta', alertaSchema);
