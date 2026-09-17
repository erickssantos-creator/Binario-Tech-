#!/bin/bash

EMAIL="aluno_$(date +%s)@binariotech.com"
SENHA="senhaSegura123"
URL="http://localhost:3009/api/v1/prova"

echo "=== 1. Cadastrando Usuário ==="
curl -s -X POST "$URL/register" \
  -H "Content-Type: application/json" \
  -d "{\"email\":\"$EMAIL\", \"senha\":\"$SENHA\"}" | jq .

echo ""
echo "=== 2. Realizando Login ==="
RESPONSE=$(curl -s -X POST "$URL/login" \
  -H "Content-Type: application/json" \
  -d "{\"email\":\"$EMAIL\", \"senha\":\"$SENHA\"}")

echo $RESPONSE | jq .

TOKEN=$(echo $RESPONSE | jq -r '.token')

echo ""
echo "=== 3. Acessando Rota Protegida ==="
curl -s -X GET "$URL/relatorio" \
  -H "Authorization: Bearer $TOKEN" | jq .
