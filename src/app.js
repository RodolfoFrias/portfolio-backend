const express = require('express');
const bodyParser = require('body-parser');

const Routes = require('./routes/routes');

const app = express();

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

app.use('/', Routes);

app.use((error, req, res, next) => {
    console.log('Middleware status: ', error.statusCode);
    const status = error.statusCode;
    const message = error.message;
    const data = error.data;
    res.status(status).json({message:message, data: data});
});

app.listen(process.env.PORT || 9000,  () => console.log('Server on'));