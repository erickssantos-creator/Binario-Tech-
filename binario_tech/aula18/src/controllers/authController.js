const Usuario = require('../models/Usuario'); // Ajuste o caminho se seu arquivo for Usuario.js
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.registrar = async (req, res) => {
  try {
    const { email, senha } = req.body;

    if (!email || !senha || senha.length < 6) {
      return res.status(400).json({ erro: 'A senha deve ter no mínimo 6 caracteres.' });
    }

    const hashSenha = await bcrypt.hash(senha, 10);
    const novoUsuario = await Usuario.create({ email, senha: hashSenha });

    return res.status(201).json({ mensagem: 'Usuário cadastrado com sucesso!', id: novoUsuario._id });
  } catch (error) {
    return res.status(500).json({ erro: error.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, senha } = req.body;

    const usuario = await Usuario.findOne({ email });
    if (!usuario) {
      return res.status(401).json({ erro: 'Credenciais inválidas.' });
    }

    const senhaValida = await bcrypt.compare(senha, usuario.senha);
    if (!senhaValida) {
      return res.status(401).json({ erro: 'Credenciais inválidas.' });
    }

    const token = jwt.sign(
      { id: usuario._id, email: usuario.email },
      process.env.JWT_SECRET || 'binario_tech_chave_oficial_exame_2026',
      { expiresIn: '30m' }
    );

    return res.json({ token });
  } catch (error) {
    return res.status(500).json({ erro: error.message });
  }
};
