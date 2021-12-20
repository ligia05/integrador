const avaliacao = require('../database/AvaliacaoLojas.json')
const produtos = require('../database/produtos.json')
const maisvendidos = require('../database/maisVendidos.json')
const fs = require('fs');
const { validationResult } = require('express-validator');

const Lojacontroller = {

   lojinha: (req, res)=>{
     res.render("lojinha")
},
getProduto: (req, res) => {

    // Capturar o id requisitado (req.params)
    const idProduto = req.params.id;
    let idPrev = null;
    let idNext = null;

    // Capturar do array a pizza com o id requisitado (pizzas.find)
    const produtofinal = produtos.find(
        (p, i) => {
            idPrev = produtos[i-1]==undefined?undefined:produtos[i-1].id;
            idNext = produtos[i+1]==undefined?undefined:produtos[i+1].id;
            return p.id == idProduto
        });
        res.render('produtofinal',{produtofinal, idNext, idPrev});
    },
busca: (req,res) => {
    
    const buscaLojinha = req.query.q.trim();
    const lojinhaFiltrada = maisvendidos.filter(
        p => p.nome.toUpperCase().includes(string.toUpperCase()) 
    );
    res.render('lojinha', {maisvendidos:lojinhaFiltrada, busca:buscaLojinha});
  },
  lojinhacreate: (req,res) => {
      res.render('crud-lojinha/create')
},
store: (req,res) => {

    const erros = validationResult(req);
    
    if(!erros.isEmpty()){
      
        res.render('crud-lojinha/create', {erros: erros.mapped()})
    }

    const nome = req.body.nome;
    const ingredientes = req.body.ingredientes.split(',').map(a => a.trim());
    const preco = Number(req.body.preco);
    const produtofinal= {nome, ingredientes, preco, img:'/img/' + req.file.filename}
    
    produtofinal.id = produtos[produtos.length - 1].id + 1;
 
    produtos.push(produtofinal);

    fs.writeFileSync(
        __dirname + '/../database/produtos.json',
        JSON.stringify(produtos, null, 4),
        {flag:'w'}
    );
    res.redirect('/lojinha/create');

}



}

module.exports = Lojacontroller;


