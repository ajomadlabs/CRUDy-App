// Exporting all the Routes

const noteRoutes = require('./note_routes');

module.exports = function(app, db) {

    noteRoutes(app, db);
    
};