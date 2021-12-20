const express = require('express');
const LojaController = require('../controllers/LojaController');
const ValidadorDeFormProduto = require('../middlewares/ValidadorDeFormProduto');
const multer = require('multer');
const storage = multer.diskStorage(
    {
        destination: (req, file, cb) => {cb(null, __dirname + '/../public/images')},
        filename: (req, file, cb) => {
            console.log(file);
            cb(null,Date.now() + '-' + file.originalname);
        }
      }
);
const upload = multer({storage})
const LojistaLogado = require('../middlewares/LojistaLogado')
const router = express.Router()
router.get("/lojinha", LojaController.lojinha);
router.get ("/lojinha/:id", LojaController.getProduto)
router.get("/lojinha/maisvendidos", LojaController.busca)
router.get("/lojinha/create/", LojaController.lojinhacreate);
router.post("/lojinha/create", LojistaLogado, upload.single('images'), ValidadorDeFormProduto, LojaController.store);
module.exports=router;