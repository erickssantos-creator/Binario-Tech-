#!/bin/bash

LOG_FILE="crud_result.log"

echo "=== INICIANDO BATERIA DE TESTES CRUD ===" > "$LOG_FILE"
date >> "$LOG_FILE"
echo "----------------------------------------" >> "$LOG_FILE"

# 1. Cadastrar Veículo 1 (Volvo)
echo "1. Cadastrando Veículo 1..." >> "$LOG_FILE"
curl -s -i -X POST http://localhost:3000/api/vl/veiculos \
  -H "Content-Type: application/json" \
  -d '{"placa": "KLL-9090", "montadora": "Volvo", "modelo": "FH 540"}' >> "$LOG_FILE"
echo -e "\n\n" >> "$LOG_FILE"

# 2. Cadastrar Veículo 2 (DAF)
echo "2. Cadastrando Veículo 2..." >> "$LOG_FILE"
curl -s -i -X POST http://localhost:3000/api/vl/veiculos \
  -H "Content-Type: application/json" \
  -d '{"placa": "MNO-4321", "montadora": "DAF", "modelo": "XF 530"}' >> "$LOG_FILE"
echo -e "\n\n" >> "$LOG_FILE"

# 3. Atualizar status do Veículo ID 3
echo "3. Atualizando status do Veículo ID 3..." >> "$LOG_FILE"
curl -s -i -X PATCH http://localhost:3000/api/vl/veiculos/3/status \
  -H "Content-Type: application/json" \
  -d '{"status": "EM_ROTA"}' >> "$LOG_FILE"
echo -e "\n\n" >> "$LOG_FILE"

# 4. Deletar Veículo ID 4
echo "4. Deletando Veículo ID 4..." >> "$LOG_FILE"
curl -s -i -X DELETE http://localhost:3000/api/vl/veiculos/4 >> "$LOG_FILE"
echo -e "\n\n" >> "$LOG_FILE"

echo "=== TESTES CONCLUÍDOS ===" >> "$LOG_FILE"
