const mongoose = require('mongoose');

const genreSchema = mongoose.Schema({
  name:{
    type:String,
    require: true
  },
  create_date:{
    type: Date,
    default: Date.now
  }
})

const Genre = module.exports = mongoose.model('Genre', genreSchema)

// get Genres
module.exports.getGenres= (callback, limit) => {
  Genre.find(callback).limit(limit);
}

// add Genres
module.exports.addGenres= (genre, callback) => {
  Genre.create(genre, callback);
}
// update Genres
module.exports.updateGenre= (id, genre,options, callback) => {
  const query = {_id : id}
  const update = {
    name : genre.name
  } 
  Genre.findOneAndUpdate(query,update, options, callback);
}

module.exports.removeGenre = (id, callback) => {
	var query = {_id: id};
	Genre.remove(query, callback);
}