#!/bin/bash
echo "=================================================="
echo "   LIMPEZA DE AMBIENTE DOCKER - BINÁRIO TECH"
echo "=================================================="

# Parar e remover containers parados/exited
docker container prune -f

# Remover imagens pendentes (dangling/ununtagged)
docker image prune -f

echo "Limpeza de containers e imagens inativas concluída!"
echo "=================================================="
