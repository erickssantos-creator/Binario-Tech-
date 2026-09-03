#!/bin/bash

echo "=========================================="
echo "    TESTE DE ROTAS - BINARIO TECH"
echo "    Horário: $(date +'%Y-%m-%d %H:%M:%S')"
echo "=========================================="
echo ""

echo "[1/3] Testando rota /status..."
curl -s http://localhost:3000/status | jq .
echo ""

echo "[2/3] Testando rota /scania/info..."
curl -s http://localhost:3000/scania/info | jq .
echo ""

echo "[3/3] Testando rota /vw/info..."
curl -s http://localhost:3000/vw/info | jq .
echo ""

echo "Testes concluídos às $(date +'%H:%M:%S')!"
