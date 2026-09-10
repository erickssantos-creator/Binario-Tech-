#!/bin/bash/api
echo "================================================"
echo " AUDITORIA DE EXECUCAO DE PROCESSOS NODE.JS"
echo "================================================"

echo " Listando status de execucao dos processos Node.js"
ps aux | grep node >> ./processo.log

echo "Resultado da Lista:"
sleep 2 
cat processo.log
