const dns = require('node:dns');
dns.setServers(["1.1.1.1", "1.0.0.1"]);

const express = require('express');
const mongodb = require('./data/database');
const app = express();

const PORT = process.env.PORT || 3000;

app.use('/', require('./routes'));

mongodb.initDb((err) => {
    if (err) {
        console.log(err);
    }
    else {
        app.listen(PORT, () => { console.log(`Database is listening and node running on port ${PORT}`) });
    }
});