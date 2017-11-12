
var ObjectID = require('mongodb').ObjectID;

module.exports = function(app, db) {

    // Route for Reading Data
    // Collect the id of Data from URL

    app.get('/notes/:id', (req, res) => {
        
        const id = req.params.id;
        const details = { '_id': new ObjectID(id) };

        db.collection('notes').findOne(details, (err, item) => {

            if (err) {

                res.send({

                    'error': 'An error has occurred'

                });
            }

            else {

                res.send(item);

            }

        });

    });

    // Route for Creating a Note
    // Test this using POSTMAN
    // During testing send a request to localhost:8081/notes
    // Check if you get a response 'Hello, You just Created a Note'
    // if success then the route is functioning
    // else check your code again

    app.post('/notes', (req, res) => {

        // Create a Note Here
        const note = {

            text: req.body.text,
            title: req.body.title

        };
        
        db.collection('notes').insert(note, (err, result) => {

            if (err) {

                res.send({

                    'error': 'An error has occurred'
                });
            }

            else {

                res.send(result.ops[0]);

            }

        });

    });

    // Delete Route
    // Use remove function to delete
    // Take id from URL

    app.delete('/notes/:id', (req, res) => {

        const id = req.params.id;
        const details = { '_id': new ObjectID(id) };

        db.collection('notes').remove(details, (err, item) => {

            if (err) {

                res.send({

                    'error': 'An error has occurred'

                });

            }

            else {

                res.send('Note' + id + 'deleted');
        
            }

        });

    });

};