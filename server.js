// Require all the dependencies

const express = require('express');
const mongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const db = require('./app/config/db');

// Define the app

const app = express();

// Using the Body-parser

app.use(bodyParser.urlencoded({extended: true}));

// Running the Server

const port = 8081;

// Using the MongoClient

mongoClient.connect(db.url, (err, database) => {

    if (err) return console.log(err);
    
    // Importing the Routes

    require('./app/routes')(app, {});

    app.listen(port, () => {
        
        console.log('Server Started on ' + port);
        
    });
    
});
