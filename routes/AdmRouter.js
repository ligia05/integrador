const express = require('express');
const AdmLojistaController = require('../controllers/AdmLojistaController');
const AdmUsuarioController = require('../controllers/AdmUsuarioController');

const router = express.Router();

router.get('/', AdmUsuarioController.showLogin);

router.get('lojinha/create', AdmLojistaController.showLojaLogin);
module.exports = router;