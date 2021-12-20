module.exports = (req, res, next) => {
    
    if(req.session.lojas == undefined){
        return res.redirect("../lojista/login");
    }

    next();

}