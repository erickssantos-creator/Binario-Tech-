#!/bin/bash

LOG_FILE="audit_seguranca.log"

echo "=== INICIANDO AUDITORIA DE SEGURANÇA ($(date)) ===" > "$LOG_FILE"

# 3 Tentativas sem chave de API
echo -e "\n--- Tentativa 1 (Sem API Key) ---" >> "$LOG_FILE"
curl -s http://localhost:3009/api/v1/motoristas >> "$LOG_FILE"

echo -e "\n--- Tentativa 2 (Sem API Key) ---" >> "$LOG_FILE"
curl -s http://localhost:3009/api/v1/motoristas >> "$LOG_FILE"

echo -e "\n--- Tentativa 3 (Sem API Key) ---" >> "$LOG_FILE"
curl -s http://localhost:3009/api/v1/motoristas >> "$LOG_FILE"

# 1 Tentativa com chave de API válida
echo -e "\n--- Tentativa 4 (Com API Key Válida) ---" >> "$LOG_FILE"
curl -s -H "X-API-KEY: binario-tech-secret-2026" http://localhost:3009/api/v1/motoristas >> "$LOG_FILE"

echo -e "\n\n=== AUDITORIA CONCLUÍDA ===" >> "$LOG_FILE"
