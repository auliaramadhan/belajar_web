const express = require('express'),
     bodyParser = require('body-parser'),
     path = require('path'),
     expressValidator = require('express-validator'),
     { check, validationResult } = require('express-validator/check'),
     mongojs = require('mongojs'),
     db = mongojs('customerapp', ['users']),
     app = express(),
     ObjectId = mongojs.ObjectID;


// let logger = (req, res, next) => {
//     console.log('Logging ...');
//     next()
// }
// app.use(logger)

// View Engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))


//middleware body parser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: false
}))

//static path
app.use(express.static(path.join(__dirname, 'public')))

// express validator middleware
app.use(expressValidator());

//global variabel
app.use((req, res, next) => {
    res.locals.errors = null
    next()
})

{/* let person = [
//     {
//         name: 'Jeff',
//         email: 'jeff@gmail.com',
//         age: 30
//     }, {
//         name: 'sara',
//         email: 'dara@gmail.com',
//         age: 40
//     }, {
//         name: 'Bill',
//         email: 'bill@gmail.com',
//         age: 40
//     }
// ] */}

app.get('/', (req, res) => {
    // res.send('Hello Woorld')
    // res.json(person)
    db.users.find(function (err, docs) {
        res.render('index', {
            title: 'Customer',
            users: docs
        })
    })
        
})

app.post('/users/add', [
    //validaton check documentation
    check('name').isLength({min:5}),
    check('email').isEmail(),
    check('age').isNumeric()
], (req, res) => {
    // Finds the validation errors in this request and wraps them in an object with handy functions
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        console.log(errors);
        // gak tau gak ada isinya
        res.render('index', {
            title: 'Customer',
            users: person,
            errors: errors
        })
    }
     const newUser = {
        name: req.body.name,
        email: req.body.email,
        age: req.body.age
    }
    db.users.insert(newUser, (err) =>{
        err ? console.log(err) : res.redirect('/')
        // res.send(req.body);
    })
});

app.get('/users/delete/:id', (req, res) =>{
    console.log(req.params.id);
    db.users.remove({
        _id:ObjectId(req.params.id)
    }, (err) => {
        if (err) {
            console.log(err);
        } res.redirect('/')
    })
})

app.listen(3000, () => {
    console.log('server strarted on port  3000');
})

