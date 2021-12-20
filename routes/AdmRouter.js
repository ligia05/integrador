const express = require('express');
const ValidadorDeLojas = require('../middlewares/ValidadorDeLoja');
const AdmLojistaController = require('../controllers/AdmLojistaController');
const AdmUsuarioController = require('../controllers/AdmUsuarioController');

const multer = require('multer');
const storage = multer.diskStorage(
    {
        destination: (req, file, cb) => {cb(null, __dirname + '/../public/img')},
        filename: (req, file, cb) => {
            console.log(file);
            cb(null,Date.now() + '-' + file.originalname);
        }
    }
);
const upload = multer({storage})
const HomeController = require('../controllers/HomeController');
const UsuarioLogado = require('../middlewares/UsuarioLogado');
const router = express.Router();

router.get('/login', UsuarioLogado, AdmUsuarioController.showLogin);

router.get('/login', LojistaLogado, AdmLojistaController.showLojaLogin);
module.exports = router;