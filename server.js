const dns = require('node:dns');
dns.setServers(["1.1.1.1", "1.0.0.1"]);

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongodb = require('./data/database');
const app = express();

const swaggerRoutes = require('./routes/swagger');

const PORT = process.env.PORT || 3000;

app.use(cors());

//se ejecuta el middleware

//lo traduce para que tu servidor pueda entender los datos que le envían en formato JSON.
app.use(bodyParser.json());

//Cualquier petición que empiece con / (es decir, todas), pásala primero por el archivo de rutas que está en ./routes".
app.use('/', swaggerRoutes);

app.use('/', require('./routes'));

process.on('uncaughtException', (err, origin) => {
    console.log(`Caught exception: ${err}\n` + `Exception origin:${origin}`);
});

mongodb.initDb((err) => {
    if (err) {
        console.log(err);
    }
    else {
        app.listen(PORT, () => { console.log(`Database is listening and node running on port ${PORT}`) });
    }
});