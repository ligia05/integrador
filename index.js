
const express = require('express');
const session = require("express-session");


const HomeRouter = require('./routes/HomeRouter');
const LojaRouter = require('./routes/LojaRouter');
const AdmRouter = require('./routes/AdmRouter');

const LogMiddleware = require('./middlewares/LogMiddleware');

const app = express();

// view engine setup

app.set('view engine', 'ejs');
app.set("views", "./views")

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(session({secret:"SEGREDO"}));
app.use(express.static(__dirname, + 'public'));

app.use(LogMiddleware);

app.use('/', HomeRouter);
app.use('/lojinha', LojaRouter);
app.use ('/', AdmRouter);

app.listen(3000, ()=>{console.log("servir rodando...")})