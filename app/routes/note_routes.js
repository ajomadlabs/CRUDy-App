// Route for Creating a Note
// Test this using POSTMAN
// During testing send a request to localhost:8081/notes
// Check if you get a response 'Hello, You just Created a Note'
// if success then the route is functioning
// else check your code again

module.exports = function(app, db) {

    app.post('/notes', (req, res) => {

        // Create a Note Here
        console.log(req.body);
        res.send('Hello, You just Created a Note');

    });

};