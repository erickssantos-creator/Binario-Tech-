#!/bin/bash
LOG_FILE="/var/log/nginx/access.log"

echo "=================================================="
echo "    AUDITORIA DE LOGS NGINX - REQUISIÇÕES 200 OK"
echo "=================================================="

if [ -f "$LOG_FILE" ]; then
  sudo tail -n 15 "$LOG_FILE" | grep ' 200 '
else
  echo "[ERRO] Arquivo de log $LOG_FILE não encontrado."
fi

echo "=================================================="
