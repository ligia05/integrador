const geral = require('../database/BuscaGeral.json')
const homecontroller = {
    home: (req, res) => {
      res.render('home', {geral, busca:" " });
    
    },
    busca: (req,res) => {
    
    const buscaHome = req.query.q.trim();
    const buscaFiltrada = geral.filter(
        p => p.nome.toUpperCase().includes(string.toUpperCase()) 
    );
    res.render('home', {geral:buscaFiltrada, busca:buscaHome});
  }
}
  module.exports = homecontroller;
 