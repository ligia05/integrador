const req = require('express/lib/request');
module.exports = {
    showLojaLogin: (req,res) => {
        return res.render("lojalogin");
    },
    lojalogin: (req,res) => {

        // Capturar o email e a senha inseridos pelo usuário
        const {email, senha} = req.body;

        // Carregar o array de usuários (database/Usuarios.json)
        const lojistas = require('../database/LojistaAdm.json');

        // Buscar o usuário no array pelo email digitado
        const lojas = lojistas.find( u => u.email == email && u.senha == senha )

        // Caso usuário não exista, retornar erro (fim)
        if(lojas === undefined){
            return res.send("Senha ou email inválidos");
        }

        // Se chegou até aqui, manda uma mensagem de sucesso.
        req.session.lojas = lojas;
        return res.redirect("/lojinha/create")

    }
}