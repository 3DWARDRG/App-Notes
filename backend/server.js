/* Inicializa y configura el servidor de express */

const express = require('express');
const cors = require('cors');

/* Inicialización */
const app = express();

/* Configuración inicial */
app.set('port', process.env.PORT || 3000);

/* Middleware */
app.use((req, res, next) => {
    // Registra la información de la solicitud en la consola
    console.log(`Recibida solicitud ${req.method} en ${req.originalUrl}`);
    console.log('Encabezados:', req.headers);
    console.log('Cuerpo:', req.body); // Esto mostrará el cuerpo de la solicitud POST

    // Continúa con el flujo normal de manejo de la solicitud
    next();
});

/* Rutas */
app.use(require('./routes/notes.routes'))

module.exports = app;