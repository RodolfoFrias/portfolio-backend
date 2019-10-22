const express = require('express');
const bodyParser = require('body-parser');

const Routes = require('./routes/routes');

const app = express();

app.use('/', Routes);


app.listen(process.env.PORT || 9000);