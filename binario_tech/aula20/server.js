require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());

// Rota Interna para inspeção do Header de Proxy enviado pelo Nginx
app.get('/api/v1/proxy/info', (req, res) => {
  res.json({
    status: "SUCESSO",
    mensagem: "Requisição processada pelo Express via Nginx Proxy!",
    clientIp: req.headers['x-forwarded-for'] || req.socket.remoteAddress,
    hostHeader: req.headers['host'],
    portaInternaNode: PORT,
    timestamp: new Date()
  });
});

app.listen(PORT, () => {
  console.log(`[Binário Tech] API Interna de Proxy rodando na porta ${PORT}`);
});

[PASSO 4] Subir a aplicação Node.js no PM2 para execução contínua:
$ pm2 start server.js --name "api-proxy-node"
$ pm2 list

[PASSO 5] Criar o arquivo de configuração do Nginx para a rota do aluno:
$ sudo nano /etc/nginx/sites-available/binario_aluno.conf

Cole as diretivas do Nginx (Ajuste a porta interna se necessário):
server {
    listen 8080;
    server_name localhost;

    location /api/v1/proxy/ {
        proxy_pass http://127.0.0.1:3001;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'keep-alive';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    }
}
