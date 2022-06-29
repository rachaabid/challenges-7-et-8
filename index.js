const express = require('express');
const cors = require('cors');
const morgan = require ('morgan');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());
app.use(morgan('dev'));


// connect to mongodb
require('./db/connect');

require('dotenv').config();

const apiUser = require('./routes/api.user');

app.use('/api/v1', apiUser);

app.listen(process.env.port || 3000, function(){
  console.log('now listening for requests');
})