const { check } = require('express-validator');

const validacoeslojas = [
    check('nome')
        .notEmpty()
        .withMessage("Campo deve ser preenchido.")
        .isLength({min:2, max:60})
        .withMessage("O campo deve ter pelo menos 2 caracteres e no máximo 60")
        .bail()
    ,
    check('servico')
        .notEmpty()
        .withMessage("O tipo serviço deve ser descrito")
        .bail()
    ,
    check('estado')
        .isNumeric()
        .withMessage(" ")
        .bail()
]

module.exports = validacoeslojas;