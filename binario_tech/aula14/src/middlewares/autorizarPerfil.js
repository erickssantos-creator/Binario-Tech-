const autorizarPerfil = (perfisPermitidos) => {
  return (req, res, next) => {
    // Verifica se o usuário existe na requisição e se o perfil dele é permitido
    if (!req.usuario || !perfisPermitidos.includes(req.usuario.perfil)) {
      return res.status(403).json({
        status: "ERRO",
        mensagem: "Acesso negado. Seu perfil não possui permissão para este recurso."
      });
    }
    next();
  };
};

module.exports = autorizarPerfil;
