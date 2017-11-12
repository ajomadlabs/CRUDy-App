// Require all the dependencies

const express = require('express');
const mongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');

// Define the app

const app = express();

// Running the Server

const port = 8081;

app.listen(port, () => {

    console.log('Server Started on ' + port);

});