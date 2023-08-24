const mongoose = require('mongoose');

const { APP_HOST, APP_DATABASE } = process.env
const MONGODB_URI = `mongodb://${APP_HOST}/${APP_DATABASE}`;

mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(db => console.log("La base de datos esta conectada"))
    .catch(err => console.log("Error: " + err));