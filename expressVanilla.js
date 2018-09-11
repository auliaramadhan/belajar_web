const express = require('express'),
     bodyParser = require('body-parser'),
     path = require('path'),
     expressValidator = require('express-validator'),
     { check, validationResult } = require('express-validator/check'),
     mongojs = require('mongojs'),
     db = mongojs('customerapp', ['users']),
     app = express()


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
        console.log(docs);
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
    console.log(newUser);
    db.users.insert(newUser, (err) =>{
        err ? console.log(err) : res.redirect('/')
    })
});
// (req, res) =>{
//     console.log(req.body.name);
//     const newUser = {
//         name: req.body.name,
//         email: req.body.email,
//         age : req.body.age
//     }
//     console.log(newUser);
// })

app.listen(3000, () => {
    console.log('server strarted on port  3000');
})