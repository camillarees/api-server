'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const notFound = require('./handlers/404');
const errorHandler = require('./handlers/500');
const PORT = process.env.PORT || 3002
const foodRouter = require('./routes/food');
const orderRouter = require('./routes/orders');

const app = express();

app.use(cors());
app.use(express.json());
app.use(foodRouter);
app.use(orderRouter);

app.get('/', (req, res, next) => {
    res.status(200).send('Hello World');
});

app.use('*', notFound);
app.use(errorHandler);

function start(){
    app.listen(PORT, () => console.log('listening on port', PORT))
}

module.exports = { app, start };