const express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose');

app.use(bodyParser.json());

Genre =  require('./models/genre');
Book =  require('./models/book');

mongoose.connect('mongodb://localhost/bookstore')
const db = mongoose.connection;

app.get('/', (req, res) => {
    res.send('hello world');
});

app.get('/api/genres', (req, res) => {
    Genre.getGenres((err, genres) => {
        if (err) {
            throw err
        } 
        res.json(genres);
        // console.log(genres);
    });
});

app.post('/api/genres', (req, res) => {
    const genre = req.body;
    Genre.addGenres(genre, (err, genre) => {
        if (err) {
            throw err
        } 
        res.json(genre);
        // console.log(gensres);
    });
});

app.put('/api/genres/:_id', (req, res) => {
    const id = req.params._id;
    const genre = req.body;
    Genre.updateGenre(id, genre, {}, (err, genre) => {
        if (err) {
            throw err
        } 
        res.json(genre);
        // console.log(genres);
    });
});

app.delete('/api/genres/:_id', (req, res) => {
    const id = req.params._id;
    Genre.removeGenre(id, (err, genre) => {
        if (err) {
            throw err
        } 
        res.json(genre);
        // console.log(genres);
    });
});
app.get('/api/books', (req, res) => {
    Book.getBooks((err, books) => {
        if (err) {
            throw err
        } 
        res.json(books);
        // console.log(books);
    });
});

app.post('/api/books', (req, res) => {
    const book = req.body
    Book.addBook(book , (err, book) => {
        if (err) {
            throw err
        } 
        res.json(book);
        // console.log(books);
    });
});

app.get('/api/books/:_id', (req, res) => {
    Book.getBooksById( req.params._id,(err, book) => {
        if (err) {
            throw err
        } 
        res.json(book);
        // console.log(books);
    });
});

app.put('/api/books/:_id', (req, res) => {
    const id = req.params._id;
    const book = req.body;
    Book.updateBook( id,book,{},(err, book) => {
        if (err) {
            throw err
        } 
        res.json(book);
        // console.log(books);
    });
});

app.delete('/api/books/:_id', (req, res) => {
    const id = req.params._id;
    Book.removeBook( id,(err, book) => {
        if (err) {
            throw err
        } 
        res.json(book);
        // console.log(books);
    });
});


app.get('', (req, res) => {
    res.send();
});

app.listen(3000)
console.log('Running on port 3000');