var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
//const nodemailer = require('nodemailer');

//var mail = require('./config/mailer')();
//mail.send();


/*
const mailTransporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: 'team.webgit@gmail.com',
        pass: 'mbblggifsakpgvwj'
    }
});
*/

var indexRouter = require('./routes/index');
var registroCursoRouter = require('./routes/registro_cursos');
var usersRouter = require('./routes/users');
var usuariosRouter = require('./routes/usuarios');
var authRouter = require('./routes/auth');
var reporteventasRoutes = require('./routes/reporteventasRoutes');
var cursosRoutes = require('./routes/cursos');
var tareasRoutes = require('./routes/tarea');
var contactosRoutes = require('./routes/contactos');
var emailRoutes = require('./routes/email');

var app = express();
const nodb = require("./models");
const mailTransporter = require('./config/mailer');

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
app.use('/tareas', tareasRoutes);
app.use('/contactos', contactosRoutes);
app.use('/email', emailRoutes);

module.exports = app;
