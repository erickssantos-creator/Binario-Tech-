# 🚀 Binario-tech — Consultoria e Desenvolvimento Back-End

![Node.js](https://img.shields.io/badge/Node.js-18.x+-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-4.x-000000?style=for-the-badge&logo=express&logoColor=white)
![Linux](https://img.shields.io/badge/Linux-Cloud_Shell-FCC624?style=for-the-badge&logo=linux&logoColor=black)
![Bash](https://img.shields.io/badge/Bash_Scripting-4EAA25?style=for-the-badge&logo=gnu-bash&logoColor=white)

Repositório central de práticas, APIs RESTful, automações em scripts Bash e exercícios resolvidos durante a disciplina de **Programação Back-End 1 (PBE1)**. A aplicação simula o ecossistema de microsserviços e telemetria da consultoria fictícia **Binario Tech**, atendendo frotas de grandes montadoras automotivas (*Scania, Mercedes-Benz, Volkswagen e Volvo*).

---

## 👨‍💻 Informações do Projeto

* **Autor:** Erick Simionato Santos
* **Orientador:** Prof. Irineu Moura Caldeira
* **Repositório:** `Binario-tech`
* **Disciplina:** Programação Back-End 1 (PBE1)
* **Porta de Execução Padrão:** `3009` *(De acordo com o número de minha chamada: 09)*

---

## 📖 Sobre a Binario Tech

A **Binario Tech** é um ambiente prático de aprendizado voltado ao desenvolvimento web no lado do servidor. Por meio de simulações do mercado corporativo, exercitam-se a construção de APIs, gerenciamento de processos no ecossistema Linux, segurança de endpoints via Middlewares, automação via scripts e manipulação estruturada de dados JSON.

---

## 📌 Sumário Navegável

- [📖 Sobre a Binario Tech](#sobre-a-binario-tech)
- [👨‍💻 Informações do Projeto](#informações-do-projeto)
- [📚 Aula 01: Configuração do Ambiente Linux & CLI](#aula-01-configuração-do-ambiente-linux--cli)
- [📚 Aula 02: Servidores HTTP, Processos e Dependências](#aula-02-servidores-http-processos-e-dependências)
- [📚 Aula 03: Inspeção Avançada CLI e Automação Shell](#aula-03-inspeção-avançada-cli-e-automação-shell)
- [📚 Aula 04: Arquitetura RESTful e Operações CRUD](#aula-04-arquitetura-restful-e-operações-crud)
- [📚 Aula 05: Arquitetura Modular, Middlewares, CORS e Segurança](#aula-05-arquitetura-modular-middlewares-cors-e-segurança)
---

## 📚 Aula 01: Configuração do Ambiente Linux & CLI

Exploração do ambiente do servidor no Google Cloud Shell, validação de runtimes, inspeção de comandos e persistência de dados estruturados em JSON.

### 🛠️ Script e Comandos Executados

```bash
# 1. Inspeção de SO e runtime do Node.js
uname -a
node -v
python3 --version
curl --version

# 2. Estruturação do workspace oficial
mkdir -p ~/binario_tech
cd ~/binario_tech
pwd

# 3. Teste de requisição externa via cURL
curl -s [https://api.github.com/users/octocat](https://api.github.com/users/octocat)

## Aula 01:

# [Exercicio 1]
Criar um arquivo chamado "dev.json" usando o editor de texto "touch":
$ touch dev.json

Inserir a seguinte estrutura basica:
{
  "nome": "Seu Nome Completo",
  "cargo": "Desenvolvedor Jr",
  "montadora_favorita": "Scania",
  "status": "Ativo"
}

# [Exercicio 2]
Visualizar o conteudo do arquivo criado diretamente no terminal:
$ cat dev.json

# [Exercicio 3]
Contar o numero de linhas do arquivo usando comando do Linux:
$ wc -l dev.json

## 📚 Aula 02: Servidores HTTP, Processos e Dependências
cd ~/binario_tech
mkdir aula2 && cd aula2
npm init -y
npm install express
sudo apt-get update && sudo apt-get install -y jq httpie

 Criar o arquivo do servidor `servidor.js` usando o editor `touch`:
   $ touch servidor.js


--- CONTEUDO DO ARQUIVO servidor.js ---
const express = require('express');
const app = express();
const PORT = 3009;

app.use(express.json());

// Rota de Status da Binario Tech
app.get('/status', (req, res) => {
    res.json({
        servidor: "Binario Tech Core",
        status: "OPERACIONAL",
        montadoras_atendidas: ["Scania", "Mercedes", "VW"],
        uptime_segundos: process.uptime()
    });
});

// Rota de Informações da Montadora Scania
app.get('/scania/info', (req, res) => {
    res.json({
        montadora: "Scania",
        foco: "Caminhoes Pesados e Ônibus",
        sistema_telemetria: "Ativo",
        unidades_conectadas: 1420
    });
});

app.listen(PORT, () => {
    console.log(`Servidor rodando com sucesso na porta ${PORT}`);
});

Executar o servidor em segundo plano no terminal:
   $ node servidor.js &

node servidor.js &
curl -s http://localhost:3009/status
http http://localhost:3009/status
curl -s http://localhost:3009/status | jq .

# [GRUPO A: AMBIENTE, PROCESSOS E COMANDOS BASICOS LINUX]

# Exercicio 01:
Verifique o diretorio atual de trabalho e liste todos os arquivos, incluindo 
arquivos ocultos e detalhes de permissao (`pwd` e `ls -la`).

Comando: pwd && ls -la

# Exercicio 02:
Exiba as variaveis de ambiente do sistema e filtre apenas as variaveis que 
contenham a palavra `USER` ou `SHELL` utilizando o operador pipe `|` e `grep`.

Comando: env | grep -E "USER|SHELL"

# Exercicio 03:
Identifique o numero do processo (PID) em que o servidor `node servidor.js` esta 
rodando no seu terminal utilizando o comando `ps aux | grep node`.

Comando: ps aux | grep node

# Exercicio 04:
Verifique se a porta de rede 3000 esta aberta e escutando conexoes usando 
o comando `netstat -tuln` ou `ss -tuln`.

Comando: ss -tuln | grep 3009

# Exercicio 05:
Crie um arquivo chamado `ambiente_info.txt` contendo a data atual do sistema, 
o nome da maquina (hostname) e o uso de memoria (`date`, `hostname`, `free -h`) 
redirecionando a saida com o operador `>`.

Código do ambiente_info.txt:
echo "--- DATA ---" > ambiente_info.txt && date >> ambiente_info.txt
echo "--- HOSTNAME ---" >> ambiente_info.txt && hostname >> ambiente_info.txt
echo "--- MEMORIA ---" >> ambiente_info.txt && free -h >> ambiente_info.txt

Comando: cat ambiente_info.txt

# [GRUPO B: GERENCIAMENTO DE DEPENDENCIAS E PACOTES]

# Exercicio 06:
Inspecione o arquivo `package.json` do seu projeto usando o comando `cat` e 
valide se a dependencia `express` esta registrada corretamente.

Comando: cat package.json

# Exercicio 07:
Instale o pacote `nodemon` como dependencia de desenvolvimento (`npm install -D nodemon`) 
e confirme as alteracoes ocorridas no `package.json`.

Comando: npm install -D nodemon

# Exercicio 08:
Utilize a ferramenta `jq` para extrair apenas o campo "dependencies" do arquivo `package.json`:
$ cat package.json | jq .dependencies

Comando: cat package.json | jq .dependencies

# Exercicio 09:
Crie um script customizado dentro de `package.json` chamado `"check"` que executa 
o comando `node -v` e teste sua execucao via `npm run check`.

Comando: npm run check

# Exercicio 10:
Instale um pacote global ou utilitario via `npm` ou `apt` e verifique onde seu 
binario foi salvo no sistema usando o comando `which` (ex: `which http`).

Comando: which http

# [GRUPO C: TESTES DE REQUISICAO E MANIPULACAO DE JSON]

# Exercicio 11:
Efetue uma requisicao HTTP GET para a rota `http://localhost:3000/scania/info` 
utilizando o comando `curl` e salve a resposta em um arquivo chamado `scania.json`.

Comando: curl -s http://localhost:3009/scania/info > scania.json

# Exercicio 12:
Efetue a mesma requisicao utilizando o `httpie` (`http GET http://localhost:3000/scania/info`) 
e observe a formatacao colorida no terminal.

Comando: http GET http://localhost:3009/scania/info

# Exercicio 13:
Utilize o utilitario `jq` para ler o arquivo `scania.json` e extrair individualmente 
apenas o valor da chave `sistema_telemetria`.

Comando: jq .sistema_telemetria scania.json

# Exercicio 14:
Adicione uma nova rota `/vw/info` no arquivo `servidor.js` que retorne dados da 
montadora Volkswagen, reinicie o processo do Node e teste a nova rota no terminal.

Adicionada a rota /vw/info no servidor.js:
app.get('/vw/info', (req, res) => {
    res.json({ montadora: "Volkswagen", foco: "Comerciais Leves e Pesados", unidades_conectadas: 980 });
});

Comando: curl -s http://localhost:3009/vw/info | jq .

# Exercicio 15:
Crie um script em Bash chamado `testar_servidor.sh` que executa automaticamente 
requisicoes para as tres rotas (`/status`, `/scania/info`, `/vw/info`), exibindo 
o horario de cada teste. Dê permissao de execucao (`chmod +x testar_servidor.sh`) 
e execute-o no terminal.

Automação com script Bash (testar_servidor.sh):
#!/bin/bash
echo "--- AUDITORIA BINARIO TECH (${date}) ---"
curl -s http://localhost:3009/status | jq .
curl -s http://localhost:3009/scania/info | jq .
curl -s http://localhost:3009/vw/info | jq .

Comando: chmod +x testar_servidor.sh
Comando: ./testar_servidor.sh

## 📚 Aula 03: Inspeção Avançada CLI e Automação Shell
cd ~/binario_tech
mkdir -p aula03 && cd aula03
npm init -y
npm install express
sudo apt-get update && sudo apt-get install -y jq httpie


Crie o arquivo package.json com o seguinte conteudo:
{
  "name": "aula03",
  "version": "1.0.0",
  "description": "",
  "main": "telemetria.js",
  "scripts": {
    "start": "node telemetria.js"
  },
  "keywords": [],
  "license": "ISC",
  "dependencies": {
    "express": "^4.22.3",
    "httpie": "^1.1.2"
  },
  "type": "commonjs"
}

Crie o arquivo telemetria.js com o seguinte conteudo:
const express = require('express');
const app = express();
const PORT = 3009;

app.use(express.json());

// Rota Scania
app.get('/api/v1/scania', (req, res) => {
    res.json({ montadora: "Scania", modelo: "R450", status: "OK", conexao: true, velocidade_media: 82 });
});

// Rota Mercedes-Benz
app.get('/api/v1/mercedes', (req, res) => {
    res.json({ montadora: "Mercedes-Benz", modelo: "Actros", status: "OK", conexao: true, velocidade_media: 78 });
});

// Rota Volkswagen
app.get('/api/v1/vw', (req, res) => {
    res.json({ montadora: "Volkswagen", modelo: "Delivery", status: "ALERTA", conexao: false, velocidade_media: 0 });
});

// Rota Volvo (EXERCÍCIO 04)
app.get('/api/v1/volvo', (req, res) => {
    res.json({ montadora: "Volvo", modelo: "FH 540", status: "OK", conexao: true, velocidade_media: 85 });
});

app.listen(PORT, () => {
    console.log(`[Binario Tech] Servidor de Telemetria rodando em http://localhost:${PORT}`);
});

Execucao do Servidor em Segundo Plano
$ node telemetria.js &

Crie o arquivo testar_telemetria.sh com o seguinte conteudo:
#!/bin/bash
echo "========================================="
echo "  AUDITORIA DE TELEMETRIA - BINARIO TECH "
echo "  Data/Hora: $(date)"
echo "========================================="

echo -e "\n[1] Testando Rota Scania..."
curl -s http://localhost:3009/api/v1/scania | jq .

echo -e "\n[2] Testando Rota Mercedes-Benz..."
curl -s http://localhost:3009/api/v1/mercedes | jq .

echo -e "\n[3] Testando Rota Volkswagen..."
curl -s http://localhost:3009/api/v1/vw | jq .

echo -e "\n-----------------------------------------"
echo "Auditoria finalizada com sucesso!"

execução:
node telemetria.js &
chmod +x testar_telemetria.sh
./testar_telemetria.sh

# Exercicio 01:
Efetue uma requisicao GET para a rota '/api/v1/scania' via cURL e use o 'jq' para exibir somente a chave 'modelo'.

Comando: curl -s http://localhost:3009/api/v1/scania | jq .modelo

# Exercicio 02:
Faça uma requisicao para a rota '/api/v1/mercedes' utilizando a ferramenta 'httpie' e salve o resultado no arquivo 'mercedes.json'.

Comando: http GET http://localhost:3009/api/v1/mercedes > mercedes.json

# Exercicio 03:
Utilize o 'jq' para ler o arquivo 'mercedes.json' e filtrar apenas o valor do campo 'status'.

Comando: jq .status mercedes.json

# Exercicio 04:
Edite o arquivo 'telemetria.js' e adicione uma nova rota '/api/v1/volvo' retornando os dados do modelo 'FH 540'. Reinicie a aplicacao e teste a rota.

Adicionado endpoint para a Volvo no telemetria.js:
app.get('/api/v1/volvo', (req, res) => {
    res.json({ montadora: "Volvo", modelo: "FH 540", status: "OK", conexao: true, velocidade_media: 80 });
});

Comando: curl -s http://localhost:3009/api/v1/volvo | jq .

# Exercicio 05: 
Configure o arquivo 'package.json' adicionando um script "start": "node telemetria.js". Teste a execucao usando 'npm start'.

Comando: npm start

# Exercicio 06:
Crie um comando que direcione o resultado da auditoria do script 'testar_telemetria.sh' para um arquivo de log chamado 'relatorio.log'.

Comando: ./testar_telemetria.sh > relatorio.log

# Exercicio 07:
Filtre a resposta da rota '/api/v1/vw' para exibir apenas os campos 'montadora' e 'status' em uma unica chamada 'jq'.

Comando: curl -s http://localhost:3009/api/v1/vw | jq '{montadora: .montadora, status: .status}'

# Exercicio 08:
Localize o PID do processo Node.js em execucao no seu terminal usando 'ps aux | grep node' e encerre-o com o comando 'kill -9 <PID>'.

Comando: kill -9 $PID

## 📚 Aula 04: Arquitetura RESTful e Operações CRUD
$ cd ~/binario_tech
$ mkdir -p aula04
$ cd aula04
$ npm init -y
$ npm install express

Crie o arquivo package.json com o seguinte conteudo:
{
  "name": "aula04",
  "version": "1.0.0",
  "description": "",
  "main": "frota_api.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "type": "commonjs",
  "dependencies": {
    "express": "^5.2.1"
  }
}

Crie o arquivo frota_api.js com o seguinte conteudo:
const express = require('express');
const app = express();
const PORT = 3009;

app.use(express.json());

// Banco de dados em memória
let veiculos = [
    { id: 1, placa: "ABC-1234", montadora: "Scania", modelo: "R450", status: "DISPONIVEL" },
    { id: 2, placa: "XYZ-9876", montadora: "Mercedes-Benz", modelo: "Actros", status: "EM_ROTA" }
];

// 1. GET /api/v1/veiculos - Listar todos os veículos (com filtro via query param 'status')
app.get('/api/v1/veiculos', (req, res) => {
    const { status } = req.query;
    if (status) {
        const filtrados = veiculos.filter(v => v.status.toUpperCase() === status.toUpperCase());
        return res.status(200).json(filtrados);
    }
    res.status(200).json(veiculos);
});

// 2. GET /api/v1/veiculos/:id - Buscar veículo específico por ID
app.get('/api/v1/veiculos/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const veiculo = veiculos.find(v => v.id === id);
    if (!veiculo) {
        return res.status(404).json({ erro: "Veiculo nao encontrado na base de dados." });
    }
    res.status(200).json(veiculo);
});

// 3. POST /api/v1/veiculos - Cadastrar novo veículo
app.post('/api/v1/veiculos', (req, res) => {
    const { placa, montadora, modelo } = req.body;
    if (!placa || !montadora || !modelo) {
        return res.status(400).json({ erro: "Campos 'placa', 'montadora' e 'modelo' sao obrigatorios." });
    }
    const novoVeiculo = {
        id: veiculos.length ? Math.max(...veiculos.map(v => v.id)) + 1 : 1,
        placa,
        montadora,
        modelo,
        status: "DISPONIVEL"
    };
    veiculos.push(novoVeiculo);
    res.status(201).json(novoVeiculo);
});

// 4. PATCH /api/v1/veiculos/:id/status - Atualização parcial (apenas status)
app.patch('/api/v1/veiculos/:id/status', (req, res) => {
    const id = parseInt(req.params.id);
    const { status } = req.body;
    const veiculo = veiculos.find(v => v.id === id);

    if (!veiculo) {
        return res.status(404).json({ erro: "Veiculo nao encontrado." });
    }
    if (!status) {
        return res.status(400).json({ erro: "O campo 'status' e obrigatorio." });
    }

    veiculo.status = status.toUpperCase();
    res.status(200).json({ mensagem: "Status atualizado com sucesso!", veiculo });
});

// 5. PUT /api/v1/veiculos/:id - Substituição total (Exercício 07)
app.put('/api/v1/veiculos/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const { placa, montadora, modelo, status } = req.body;
    const index = veiculos.findIndex(v => v.id === id);

    if (index === -1) {
        return res.status(404).json({ erro: "Veiculo nao encontrado para substituicao." });
    }

    if (!placa || !montadora || !modelo || !status) {
        return res.status(400).json({ erro: "Para substituicao total (PUT), os campos 'placa', 'montadora', 'modelo' e 'status' sao obrigatorios." });
    }

    veiculos[index] = {
        id,
        placa,
        montadora,
        modelo,
        status: status.toUpperCase()
    };

    res.status(200).json({ mensagem: "Veiculo substituido totalmente com sucesso!", veiculo: veiculos[index] });
});

// 6. DELETE /api/v1/veiculos/:id - Remover veículo da frota
app.delete('/api/v1/veiculos/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = veiculos.findIndex(v => v.id === id);
    if (index === -1) {
        return res.status(404).json({ erro: "Veiculo nao encontrado." });
    }
    veiculos.splice(index, 1);
    res.status(200).json({ mensagem: `Veiculo ID ${id} removido com sucesso.` });
});

app.listen(PORT, () => {
    console.log(`[Binario Tech] API de Frotas rodando em http://localhost:${PORT}`);
});

# Execucao do Servidor e Testes HTTP CLI

1. Iniciar o servidor:
   $ node frota_api.js &

2. Testar GET (Listagem):
   $ curl -s http://localhost:3009/api/v1/veiculos | jq .

3. Testar POST (Criar novo veiculo):
   $ curl -s -X POST http://localhost:3009/api/v1/veiculos \
     -H "Content-Type: application/json" \
     -d '{"placa":"VWX-5555","montadora":"Volkswagen","modelo":"Delivery"}' | jq .

4. Testar PATCH (Atualizar status):
   $ curl -s -X PATCH http://localhost:3009/api/v1/veiculos/1/status \
     -H "Content-Type: application/json" \
     -d '{"status":"MANUTENCAO"}' | jq .

5. Testar DELETE (Remover veiculo):
   $ curl -s -X DELETE http://localhost:3009/api/v1/veiculos/2 | jq .

# Exercicio 01:
Efetue uma requisicao GET buscando apenas o veiculo de ID 1 e exiba o resultado formatado com 'jq'.

Comando: curl -s http://localhost:3009/api/v1/veiculos/1 | jq .

# Exercicio 02:
Cadastre um novo caminhao da montadora 'Volvo' (modelo 'FH 540', placa 'KLL-9090') enviando uma requisicao POST via cURL ou httpie. Verifique se o retorno e o status HTTP 201 Created.

Comando: curl -i -X POST http://localhost:3009/api/v1/veiculos \
  -H "Content-Type: application/json" \
  -d '{"placa":"KLL-9090","montadora":"Volvo","modelo":"FH 540"}'

# Exercicio 03:
Tente cadastrar um veiculo sem passar o campo 'placa' no body da requisicao. Confirme se a API retorna o status 400 Bad Request com a mensagem de erro apropriada.

Comando: curl -i -X POST http://localhost:3009/api/v1/veiculos \
  -H "Content-Type: application/json" \
  -d '{"montadora":"Volvo","modelo":"FH 540"}'

# Exercicio 04:
Faça uma requisicao GET filtrando os veiculos por query param: 'http://localhost:3000/api/v1/veiculos?status=DISPONIVEL'.

Comando: curl -s "http://localhost:3009/api/v1/veiculos?status=DISPONIVEL" | jq .

# Exercicio 05:
Atualize o status do veiculo de ID 3 para 'EM_ROTA' utilizando a rota PATCH.

Comando: curl -s -X PATCH http://localhost:3009/api/v1/veiculos/3/status \
  -H "Content-Type: application/json" \
  -d '{"status":"EM_ROTA"}' | jq .

# Exercicio 06:
Tente atualizar ou deletar um veiculo com um ID inexistente (ex: ID 99) e valide se o status code retornado e 404 Not Found.

Comando: curl -i -X DELETE http://localhost:3009/api/v1/veiculos/99

# Exercicio 07:
Adicione uma nova rota PUT na API (`/api/v1/veiculos/:id`) que permite substituir todos os dados de um veiculo de uma so vez.

Código:
app.put('/api/v1/veiculos/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const { placa, montadora, modelo, status } = req.body;
    const index = veiculos.findIndex(v => v.id === id);
    
    if (index === -1) {
        return res.status(404).json({ erro: "Veiculo nao encontrado." });
    }
    if (!placa || !montadora || !modelo || !status) {
        return res.status(400).json({ erro: "Todos os campos sao obrigatorios para substituicao total (PUT)." });
    }

    veiculos[index] = { id, placa, montadora, modelo, status: status.toUpperCase() };
    res.status(200).json({ mensagem: "Veiculo atualizado completamente!", veiculo: veiculos[index] });
});

# Exercicio 08:
Crie um script Bash chamado 'teste_crud.sh' que executa sequencialmente o cadastro de 2 veiculos, atualiza 1 deles e deleta o outro, registrando os logs em 'crud_result.log'.

Código:
#!/bin/bash

LOG_FILE="crud_result.log"
echo "=== LOG DE EXECUCAO DO TESTE CRUD ===" > $LOG_FILE

echo -e "\n1. Cadastrando primeiro veiculo..." >> $LOG_FILE
curl -s -X POST http://localhost:3009/api/v1/veiculos \
  -H "Content-Type: application/json" \
  -d '{"placa":"AAA-1111","montadora":"Volvo","modelo":"VM"}' >> $LOG_FILE
echo "" >> $LOG_FILE

echo -e "\n2. Cadastrando segundo veiculo..." >> $LOG_FILE
curl -s -X POST http://localhost:3009/api/v1/veiculos \
  -H "Content-Type: application/json" \
  -d '{"placa":"BBB-2222","montadora":"Scania","modelo":"R450"}' >> $LOG_FILE
echo "" >> $LOG_FILE

echo -e "\n3. Atualizando status do veiculo ID 3..." >> $LOG_FILE
curl -s -X PATCH http://localhost:3009/api/v1/veiculos/3/status \
  -H "Content-Type: application/json" \
  -d '{"status":"EM_ROTA"}' >> $LOG_FILE
echo "" >> $LOG_FILE

echo -e "\n4. Removendo veiculo ID 4..." >> $LOG_FILE
curl -s -X DELETE http://localhost:3009/api/v1/veiculos/4 >> $LOG_FILE
echo "" >> $LOG_FILE

echo -e "\n=== FIM DOS TESTES ===" >> $LOG_FILE
                                                                                                                                          
Comando: chmod +x teste_crud.sh
Comando: ./teste_crud.sh
