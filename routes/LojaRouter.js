const express = require('express');

const LojaController = require('../controllers/LojaController');
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



const router = express.Router()
router.get('/lojinha', LojaController.lojinha);
router.get ('/lojinha/:id', LojaController.getProduto)
router.get('/lojinha/maisvendidos', LojaController.busca)

router.get('/lojinha/create', LojaController.lojinhacreate);
router.post('/lojinha/create', upload.single('images'), LojaController.store);

module.exports= router;