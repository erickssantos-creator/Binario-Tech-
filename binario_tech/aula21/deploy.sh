#!/bin/bash
echo "=================================================="
echo "    PIPELINE DE DEPLOY AUTOMATIZADO - BINÁRIO TECH"
echo "=================================================="

REPO_DIR="$HOME/curso-pbe1/binario_tech"
APP_NAME="api-cicd"
PORT=3009
LOG_FILE="$REPO_DIR/aula21/deploy_history.log"

echo "[1/4] Atualizando código-fonte do repositório remoto..."
cd $REPO_DIR

echo "[2/4] Verificando e instalando novas dependências..."
cd $REPO_DIR/aula21
npm install --production

echo "[3/4] Reiniciando aplicação no PM2..."
npx pm2 restart $APP_NAME

echo "[4/4] Executando Smoke Test na API (Porta $PORT)..."
sleep 2
HTTP_STATUS=$(curl -s -o /dev/null -w "%{http_code}" http://localhost:$PORT/api/v1/versao)

if [ "$HTTP_STATUS" -eq 200 ]; then
  echo -e "\n[SUCESSO] Deploy realizado e verificado com sucesso! HTTP Status 200."

  # --- EXERCÍCIO 2: Gravando log de histórico ---
  COMMIT_HASH=$(git rev-parse --short HEAD 2>/dev/null || echo "sem-commit")
  DATA_HORA=$(date "+%Y-%m-%d %H:%M:%S")
  echo "[$DATA_HORA] Deploy com sucesso | Commit: $COMMIT_HASH | Status: 200" >> $LOG_FILE
  # ----------------------------------------------

  npx pm2 list | grep $APP_NAME
else
  echo -e "\n[FALHA] Smoke Test falhou com status $HTTP_STATUS! Verifique os logs do PM2."
  npx pm2 logs $APP_NAME --lines 20
  exit 1
fi
echo "=================================================="
