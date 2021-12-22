const geral = require('../database/BuscaGeral.json');
const HomeController = {
  
  home: (req, res) => {
  return res.render('home', {
      title:'TLINK' })
 
},
 busca: (req,res) => {
  const resultado = req.query.q.trim();
  return res.render('home', { geral:resultado});
 }
}
module.exports = HomeController;
