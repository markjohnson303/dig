var Song = require('./models/Song');

module.exports = function(app) {

	// server routes ===========================================================
	// handle things like api calls
	// authentication routes

	//api ---------------------------------------------------------------------
		    // get all songs
		    app.get('/api/songs', function(req, res) {
		        // use mongoose to get all songs in the database
		        Song.find(function(err, songs) {
		            // if there is an error retrieving, send the error. nothing after res.send(err) will execute
		            if (err)
		                res.send(err);
		            res.json(songs); // return all songs in JSON format
		        });
		    });

		    // create song and send back all songs after creation
		    app.post('/api/songs', function(req, res) {

		        // create a songs, information comes from AJAX request from Angular
		        Song.create({
		            spotifyURL : req.body.spotifyURL,
		            notes : req.body.notes
		        }, function(err, todo) {
		            if (err)
		                res.send(err);

		            // get and return all the songs after you create another
		            Song.find(function(err, songs) {
		                if (err)
		                    res.send(err);
		                res.json(songs);
		            });
		        });

		    });

	// frontend routes =========================================================
	// route to handle all angular requests
	app.get('*', function(req, res) {
		res.sendfile('./public/index.html');
	});

};