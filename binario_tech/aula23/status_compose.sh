#!/bin/bash
echo "=================================================="
echo "   DIAGNÓSTICO DOCKER COMPOSE - BINÁRIO TECH"
echo "=================================================="

docker compose ps

echo -e "\n--- Teste de Conectividade do Serviço Web (Porta 3009) ---"
HTTP_CODE=$(curl -s -o /dev/null -w "%{http_code}" http://localhost:3009/api/v1/visitas)

if [ "$HTTP_CODE" -eq 200 ]; then
    echo -e "[OK] Aplicação Web e Redis respondendo corretamente na porta 3009 (HTTP 200)."
else
    echo -e "[ERRO] Falha ao comunicar com a pilha multi-container (HTTP Status: $HTTP_CODE)."
fi
echo "=================================================="
