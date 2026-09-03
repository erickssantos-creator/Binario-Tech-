#!/bin/bash

LOG_FILE="auditoria.log"

echo "====================================================" > "$LOG_FILE"
echo " AUDITORIA COMPLETA DE TELEMETRIA - BINÁRIO TECH" >> "$LOG_FILE"
echo " Data do Teste: $(date)" >> "$LOG_FILE"
echo "====================================================" >> "$LOG_FILE"

executa_teste() {
    local descricao="$1"
    local comando="$2"
    
    echo -e "\n--- $descricao ---" >> "$LOG_FILE"
    eval "$comando" >> "$LOG_FILE" 2>&1
    echo "" >> "$LOG_FILE"
}

# 1. Scania - GET (Listar)
executa_teste "[1] Listar Telemetria Scania" \
  "curl -s http://localhost:3000/api/v1/telemetria/scania | jq ."

# 2. Scania - POST Válido (VIN com 12 caracteres)
executa_teste "[2] Registrar Telemetria Scania (Sucesso)" \
  'curl -s -X POST http://localhost:3000/api/v1/telemetria/scania -H "Content-Type: application/json" -d "{\"modelo\":\"R540\",\"vin\":\"9BS555444333\",\"temperatura_motor\":99}" | jq .'

# 3. Scania - POST Inválido (Middleware Trava VIN)
executa_teste "[3] Registrar Telemetria Scania (Erro: VIN Inválido)" \
  'curl -s -X POST http://localhost:3000/api/v1/telemetria/scania -H "Content-Type: application/json" -d "{\"modelo\":\"R450\",\"vin\":\"12345\",\"temperatura_motor\":88}" | jq .'

# 4. Mercedes-Benz - GET (Listar)
executa_teste "[4] Listar Telemetria Mercedes-Benz" \
  "curl -s http://localhost:3000/api/v1/telemetria/mercedes | jq ."

# 5. Mercedes-Benz - POST Válido
executa_teste "[5] Registrar Telemetria Mercedes-Benz (Sucesso)" \
  'curl -s -X POST http://localhost:3000/api/v1/telemetria/mercedes -H "Content-Type: application/json" -d "{\"modelo\":\"Actros 2651\",\"vin\":\"9BM888777666\",\"temperatura_motor\":91}" | jq .'

# 6. Rota Inexistente (404)
executa_teste "[6] Testando Rota 404 (Volvo)" \
  "curl -s http://localhost:3000/api/v1/telemetria/volvo | jq ."

echo "Auditoria concluída com sucesso! Verifique os resultados em $LOG_FILE."
