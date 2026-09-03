const validaVin = (req, res, next) => {
    const { vin } = req.body;

    if (!vin || vin.trim().length !== 12) {
        return res.status(400).json({ 
            erro: "Validação falhou: O código VIN/Chassis deve conter exatamente 12 caracteres." 
        });
    }

    next();
};

module.exports = validaVin;
