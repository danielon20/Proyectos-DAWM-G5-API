var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');

var indexRouter = require('./routes/index');
var registroCursoRouter = require('./routes/registro_cursos');
var usersRouter = require('./routes/users');
var usuariosRouter = require('./routes/usuarios');
var authRouter = require('./routes/auth');
var reporteventasRoutes = require('./routes/reporteventasRoutes');
var cursosRoutes = require('./routes/cursos');

var app = express();
const nodb = require("./models");

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/usuarios', usuariosRouter);
app.use('/auth', authRouter);
app.use('/reportes', reporteventasRoutes);
app.use('/registro_curso', registroCursoRouter);
app.use('/cursos', cursosRoutes);

module.exports = app;
