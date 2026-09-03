const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

// Banco de dados em memoria
let veiculos = [
	{ id: 1, placa: "ABC-1234", montadora: "Scania", modelo: "R450", status:
"DISPONIVEL" },
	{ id: 2, placa: "XYZ-9876", montadora: "Mercedes-Benz", modelo: "Actross",
status: "EM_ROTA" }
];

// 1. GET /api/vl/veiculos - Listar todos os veiculos (Suporta filtro por status query param)
app.get('/api/vl/veiculos', (req, res) => {
	const { status } = req.query;
	if (status) {
		const filtrados = veiculos.filter(v => v.status.toUpperCase() ===
status.toUpperCase());
		return res.status(200).json(filtrados);
	}
	res.status(200).json(veiculos);
});

// 2. GET /api/vl/veiculos/:id - Buscar veiculo por ID
app.get('/api/vl/veiculos/:id', (req, res) => {
	const id = parseInt(req.params.id);
	const veiculo = veiculos.find(v => v.id === id);
	if (!veiculo) {
		return res.status(404).json({ erro: "Veiculo nao encontrado na base de dados."});
	}
	res.status(200).json(veiculo);
});

// 3. POST /api/vl/veiculos - Cadastrar novo veiculo (Criacao)
app.post('/api/vl/veiculos', (req, res) => {
	const { placa, montadora, modelo } = req.body;
	if (!placa || !montadora || !modelo) {
		return res.status(400).json({ erro: "Campos 'placa', 'montadora' e 'modelo' sao obrigatorios." });
	}
	const novoVeiculo = {
		id: veiculos.length + 1,
		placa,
		montadora,
		modelo, 
		status: "DISPONIVEL"
	};
	veiculos.push(novoVeiculo);
	res.status(201).json(novoVeiculo);
});

// 4. PATCH /api/vl/veiculos/:id/status - Atualizar status do veiculo
app.patch('/api/vl/veiculos/:id/status', (req, res) => {
	const id = parseInt(req.params.id);
	const { status } = req.body;
	const veiculo = veiculos.find(v => v.id === id);

	if (!veiculo) {
		return res.status(404).json({ erro: "Veiculo nao encontrado." });
	}
	if (!status) {
		return res.status(400).json({ erro: "O campo 'status' e obrigatorio."	
});
        }
	
	veiculo.status = status.toUpperCase();
	res.status(200).json({ mensagem: "Status atualizado com sucesso!", veiculo 
});
});

// 5. DELETE /api/vl/veiculos/:id - Remover veiculo fora da frota
app.delete('/api/vl/veiculos/:id', (req, res) => {
	const id = parseInt(req.params.id);
	const index = veiculos.findIndex(v => v.id === id);
	if (index === -1) {
		return res.status(404).json({ erro: "Veiculo nao encontrado." });
	}
	veiculos.splice(index, 1);
	res.status(200).json({ mensagem: `Veiculo ID ${id} removido com sucesso.`
});
});

app.listen(PORT, () => {
	console.log(`[Binario Tech] API de frotas rodando em http://localhost:${PORT}`);
});

// 6. PUT /api/vl/veiculos/:id - Substituir todos os dados do veiculo
app.put('/api/vl/veiculos/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const { placa, montadora, modelo, status } = req.body;

    const index = veiculos.findIndex(v => v.id === id);

    if (index === -1) {
        return res.status(404).json({ erro: "Veiculo nao encontrado." });
    }

    if (!placa || !montadora || !modelo || !status) {
        return res.status(400).json({ erro: "Todos os campos ('placa', 'montadora', 'modelo', 'status') sao obrigatorios." });
    }

    // Substitui todo o objeto preservando apenas o ID
    veiculos[index] = {
        id,
        placa,
        montadora,
        modelo,
        status: status.toUpperCase()
    };

    res.status(200).json({ mensagem: "Veiculo substituido com sucesso!", veiculo: veiculos[index] });
});
