const express = require ('express');
const morgan = require ('morgan');
const cors = require('cors');
const router = express.Router();
const path = require('path');
const app = express();
let db = require('./database');

app.set('port', process.env.PORT || 3500);
app.use(morgan('dev'));
app.use(express.json());

app.listen(app.get('port'), () => {
    console.log('Servidor en el puerto', app.get('port'));
})
