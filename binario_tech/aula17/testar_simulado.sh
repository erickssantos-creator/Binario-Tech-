#!/bin/bash

# Define a URL da rota de healthcheck
URL="http://localhost:3009/api/v1/health"

# Realiza a requisição e captura apenas o código de status HTTP
HTTP_STATUS=$(curl -s -o /dev/null -w "%{http_code}" "$URL")

# Grava o status com data/hora no arquivo health_check.log
echo "[$(date '+%Y-%m-%d %H:%M:%S')] HTTP Status Code: $HTTP_STATUS" > health_check.log

echo "Teste de integridade concluído! Status $HTTP_STATUS gravado em health_check.log"
