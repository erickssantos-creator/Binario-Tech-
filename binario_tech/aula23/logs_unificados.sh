#!/bin/bash
echo "=================================================="
echo "   MONITORAMENTO DE LOGS UNIFICADOS - AULA 23"
echo "=================================================="

docker compose logs -f --tail=20
