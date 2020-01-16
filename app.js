const express = require('express');
const bodyParser = require('body-parser');
// const mongodb = require('mongoose');
// const mongodb = require('mongodb').MongoClient;
const registerMongo = require('./routes/registerMongo');
const registerMysql = require('./routes/registerMysql');
const cors = require('cors');
const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
  // Set CORS headers so that the React SPA is able to communicate with this server
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET,POST,PUT,PATCH,DELETE,OPTIONS'
  );
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});
app.use(cors());
app.use('/mongo/register', registerMongo);
app.use('/mysql/register', registerMysql);
app.listen(4100);