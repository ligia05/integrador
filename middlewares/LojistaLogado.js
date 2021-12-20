module.exports = (req, res, next) => {
    
    if(req.session.lojistas == undefined){
        return res.redirect("../login");
    }

    next();

}