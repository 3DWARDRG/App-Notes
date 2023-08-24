const express = require('express');

/* Inicialización */
const app = express();

/* Configuración */
app.set('port', process.env.PORT || 3000)
//app.set('views', path.join(__dirname, 'pages'));


/* Middlewares */
//app.use(express.urlencoded({ extended: false }));

/* Variables globales */

/* Rutas */
app.use(require('./routes/notes.routes'));

/* archivos estáticos */
//app.use(express.static(path.join(__dirname, 'public')));




module.exports = app;