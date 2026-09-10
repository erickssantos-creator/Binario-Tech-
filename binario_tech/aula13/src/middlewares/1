const verificarContentType = (req, res, next) => {
  // Aplica a validação apenas para requisições do tipo POST
  if (req.method === 'POST') {
    const contentType = req.headers['content-type'];
    
    // Verifica se o cabeçalho existe e se é application/json
    if (!contentType || !contentType.includes('application/json')) {
      return res.status(400).json({
        status: "BAD_REQUEST",
        mensagem: "O cabeçalho Content-Type deve ser application/json para requisições POST."
      });
    }
  }
  next(); // Prossegue para a próxima etapa se estiver correto
};

module.exports = verificarContentType;
