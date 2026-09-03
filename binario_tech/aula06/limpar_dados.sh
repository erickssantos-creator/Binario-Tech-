#!/bin/bash
echo "=================================================="
echo " RESETANDO AMBIENTE DE TESTES - BINARIO TECH"
echo "=================================================="

echo -e "\n[1] Encerrando processos Node.js ativos..."
# pkill encerra todos os processos chamados 'node' de forma limpa
pkill -f "node concorrencia.js" || true

echo -e "\n[2] Removendo arquivo de persistencia (ocorrencias.json)..."
if [ -f "ocorrencias.json" ]; then
    rm -f ocorrencias.json
    echo ">> Arquivo 'ocorrencias.json' excluido com sucesso."
else
    echo ">> Arquivo 'ocorrencias.json' nao encontrado (ambiente ja estava limpo)."
fi

echo -e "\n=================================================="
echo " AMBIENTE PRONTO PARA UM NOVO CICLO DE TESTES!"
echo "=================================================="
