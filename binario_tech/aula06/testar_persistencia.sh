#!/bin/bash
echo "=================================================="
echo " AUDITORIA DE PERSISTENCIA EM DISCO - BINARIO TECH"
echo "=================================================="

# Reseta o JSON antes de iniciar
echo "[]" > ocorrencias.json

echo -e "\n[1] Cadastrando Ocorrencia Scania..."
RES1=$(curl -s -X POST http://localhost:3000/api/vl/ocorrencias \
  -H "Content-Type: application/json" \
  -d '{"montadora":"Scania","placa":"SCA-9988","descricao":"Superaquecimento de motor","gravidade":"ALTA"}')
echo $RES1 | jq .

# Extrai o ID da Scania criada
ID_SCANIA=$(echo $RES1 | jq -r '.id')

echo -e "\n[2] Cadastrando Ocorrencia Mercedes-Benz..."
curl -s -X POST http://localhost:3000/api/vl/ocorrencias \
  -H "Content-Type: application/json" \
  -d '{"montadora":"Mercedes-Benz","placa":"MBB-1122","descricao":"Troca de pastilhas de freio","gravidade":"BAIXA"}' | jq .

echo -e "\n[3] Deletando a Ocorrencia Scania criada (ID: $ID_SCANIA)..."
curl -s -X DELETE http://localhost:3000/api/vl/ocorrencias/$ID_SCANIA | jq .

echo -e "\n[4] Lendo arquivo JSON direto do disco (deve conter apenas a Mercedes-Benz)..."
cat ocorrencias.json | jq .
