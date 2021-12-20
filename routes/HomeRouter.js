const express = require('express');
const HomeController = require('../controllers/HomeController')
const router = express.Router();

/* GET home page. */
router.get('/', HomeController.home);
router.get('/busca', HomeController.busca);


module.exports = router;