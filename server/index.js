require('dotenv').config();
const massive = require('massive')
const bodyParser = require('body-parser');
const express = require('express');
const ctrl = require('./controller')

const { CONNECTION_STRING } = process.env

massive(CONNECTION_STRING).then(db => {
    app.set('db', db);
    console.log('Connected to database');
  });

const app = express();

app.use(bodyParser.json());

app.get('/api/inventory', ctrl.getAllInventory);

app.post('/api/product', ctrl.createProduct);

const port = 3025
app.listen(port, () => console.log(`Listening on port ${port}`));