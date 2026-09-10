const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const usuarios = [];

const registrar = async (req, res) => {
  try {
    const { email, senha, perfil } = req.body;

    // EXERCÍCIO 3: Rejeitar senhas com menos de 6 caracteres
    if (!senha || senha.length < 6) {
      return res.status(400).json({
        status: "ERRO",
        mensagem: "A senha deve ter no mínimo 6 caracteres."
      });
    }

    const usuarioExiste = usuarios.find(u => u.email === email);
    if (usuarioExiste) {
      return res.status(400).json({ status: "ERRO", mensagem: "Usuário já cadastrado." });
    }

    const senhaHash = await bcrypt.hash(senha, 10);
    const novoUsuario = {
      id: usuarios.length + 1,
      email,
      senha: senhaHash,
      perfil: perfil || 'OPERADOR'
    };

    usuarios.push(novoUsuario);
    return res.status(201).json({ mensagem: "Usuário registrado com sucesso!" });
  } catch (error) {
    return res.status(500).json({ status: "ERRO", mensagem: "Erro ao registrar usuário." });
  }
};

const login = async (req, res) => {
  try {
    const { email, senha } = req.body;

    const usuario = usuarios.find(u => u.email === email);
    if (!usuario) {
      return res.status(401).json({ status: "ERRO", mensagem: "Credenciais inválidas." });
    }

    const senhaValida = await bcrypt.compare(senha, usuario.senha);
    if (!senhaValida) {
      return res.status(401).json({ status: "ERRO", mensagem: "Credenciais inválidas." });
    }

    const secret = process.env.JWT_SECRET || 'secreta_padrao_binario_tech';

    // EXERCÍCIO 2: Expiração ajustada para 15 segundos ('15s')
    const token = jwt.sign(
      { id: usuario.id, email: usuario.email, perfil: usuario.perfil },
      secret,
      { expiresIn: '15s' }
    );

    return res.status(200).json({ token });
  } catch (error) {
    return res.status(500).json({ status: "ERRO", mensagem: "Erro ao realizar login." });
  }
};

const perfil = (req, res) => {
  return res.status(200).json({ usuario: req.usuario });
};

module.exports = { registrar, login, perfil };
