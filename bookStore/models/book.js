const mongoose = require('mongoose');

// Book Schema
const bookSchema = mongoose.Schema({
	title:{
		type: String,
		required: true
	},
	genre:{
		type: String,
		required: true
	},
	description:{
		type: String
	},
	author:{
		type: String,
		required: true
	},
	publisher:{
		type: String
	},
	pages:{
		type: String
	},
	image_url:{
		type: String
	},
	buy_url:{
		type: String
	},
	create_date:{
		type: Date,
		default: Date.now
	}
});

const Book = module.exports = mongoose.model('Book', bookSchema)

// get Book
module.exports.getBooks= (callback, limit) => {
  Book.find(callback).limit(limit);
}

// get Book
module.exports.getBooksById= (id, callback) => {
  Book.findById(id, callback);
}

module.exports.addBook= (book, callback) => {
  Book.create(book, callback);
}
module.exports.updateBook= (id,book,options, callback) => {
  const query = {_id : id}
  var update = {
		title: book.title,
		genre: book.genre,
		description: book.description,
		author: book.author,
		publisher: book.publisher,
		pages: book.pages,
		image_url: book.image_url,
		buy_url: book.buy_url
	}
	Book.findOneAndUpdate(query, update, options, callback);
}

module.exports.removeBook = (id, callback) => {
	var query = {_id: id};
	Book.remove(query, callback);
}