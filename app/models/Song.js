// // grab the mongoose module
// var mongoose = require('mongoose'),
// 	Schema = mongoose.Schema;


// var SongSchema = new Schema({
//   spotifyURL: String,
//   notes: Boolean
// });

// var Song = mongoose.model('Song', SongSchema);

// module.exports = Song;

var mongoose = require('mongoose');

// define our nerd model
// module.exports allows us to pass this to other files when it is called
module.exports = mongoose.model('Song', {
    spotifyURL : {type : String, default: ''},
    notes : {type : String, default: ''}
});