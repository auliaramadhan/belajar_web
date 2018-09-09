const express = require('express');
const mysql = require('mysql');

// CREATE connection
const db = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'nodemysql'
});

// Connect
db.connect((err) => {
    if(err){
        throw err;
    }
    console.log('MySql Connected...');
});

const app = express();

// CREATE DB
app.get('/createdb', (req, res) => {
    let sql = 'CREATE DATABASE nodemysql';
    db.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('Database created...');
    });
});

// CREATE TABLE
app.get('/createpoststable', (req, res) => {
    let sql = `CREATE TABLE  posts(id int AUTO_INCREMENT,title VARCHAR(255), body VARCHAR(255), PRIMARY KEY(id))`;
    db.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('Posts TABLE created...');
    });
});

// Insert post 1
app.get('/addpost1', (req, res) => {
    let post = {title:'Post One', body:'This is post number one'};
    let sql = 'INSERT INTO posts SET ?';
    let query = db.query(sql, post, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('Post 1 added...');
    });
});

// Insert post 2
app.get('/addpost2', (req, res) => {
    let post = {title:'Post Two', body:'This is post number two'};
    let sql = 'INSERT INTO posts SET ?';
    let query = db.query(sql, post, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('Post 2 added...');
    });
});

// SELECT posts
app.get('/getposts', (req, res) => {
    let sql = 'SELECT * FROM posts';
    let query = db.query(sql, (err, results) => {
        if(err) throw err;
        console.log(results);
        res.send('Posts fetched...');
    });
});

// SELECT single post
app.get('/getpost/:id', (req, res) => {
    let sql = `SELECT * FROM posts WHERE id = ${req.params.id}`;
    let query = db.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('Post fetched...');
    });
});

// Update post
app.get('/updatepost/:id', (req, res) => {
    let newTitle = 'update titile';
    let sql = `UPDATE posts SET title = '${newTitle}' WHERE id = ${req.params.id}`;
    let query = db.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('Post updated...');
    });
});

// Delete post
app.get('/deletepost/:id', (req, res) => {
    let newTitle = 'Updated Title';
    let sql = `DELETE FROM posts WHERE id = ${req.params.id}`;
    let query = db.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('Post deleted...');
    });
});

app.listen('3000', () => {
    console.log('Server started ON port 3000');
});

console.log('dasda');

    



/* SYNTAX
CREATE database test;
DROP database test;

## TAMBAH DATA
CREATE TABLE customer(
    id INT NOT NULL AUTO INCREMENT,
    firstName VARCHAR(255), lastName VARCHAR(255),email VARCHAR(255),address VARCHAR(255),city VARCHAR(255),
    state VARCHAR(255), age int
    PRIMARY KEY(id)
); 

INSERT INTO customer(
    firstname, lastname .....) 
    VALUES ('jjohn', 'doe', 'john.doe@gmail.com', 'Boston'.....), 
    ('jjohn', 'doe', 'john.doe@gmail.com', 'Boston'.....);
)


UPDATE CUSTOMERS SET email = 'john.doe@gmail.com'
    WHERE id = 3

DELETE FROM customer WHERE id = 3

CREATE index CIndex ON customers(city); //set index in city
DROP index CIndex ON customers; //set index in city

## GANTI KOLUM ATAU TABLE
ALTER TABLE customer ADD testcol varchar(255);
ALTER TABLE customer MODIFY COLUMN testcol int;
ALTER TABLE customer DROP COLUMN testcol ;

## QUERY DATA
SELECT * FROM customers;
SELECT * FROM customers WHERE id =2;
SELECT * FROM customers WHERE age > 2;
SELECT * FROM customers ORDER BY lastname DESC/ASC;

SELECT distinct state FROM customers ; //no duplicate

SELECT * FROM customers WHERE age between 22 and 30;
SELECT * FROM customers WHERE city like '%n'; //regex end with n
SELECT * FROM customers WHERE city like '%n%'; //regex n in between
SELECT * FROM customers WHERE city not like '%n%'; 

SELECT * FROM customers WHERE city in ('new york', 'new hampshire'); 

## FOREIGN KEY
CREATE TABLE products(
    id INT NOT NULL AUTO INCREMENT,
    productmae varchar(255), price varchar(255)
    PRIMARY KEY(id),
); 
CREATE TABLE orders(
    id INT NOT NULL AUTO INCREMENT,
    ordernumber INT, productid INT, customerid INT,orderdate DATETIME default CURRENT_TIMESTAMP,
    PRIMARY KEY(id),
    FOREIGN KEY(customerid) references customers(id)
    FOREIGN KEY(productid) references produts(id)
); 

## JOINS
SELECT customers.firstname, customer.lastname, orders.number, products.name
FROM customer inner join orders
ON customers.id = order.customerid
 inner join products
ON products.id = order.productsid
ORDER BY orders.number;
// ada LEFT JOIN dan RIGHT JOIN

## ALIASES
SELECT firstname as 'nama', city as 'kota' FROM customers
SELECT concat(firstname, ' ' , lastname) as 'nama',
    concat(address, ' ', city, ' ', state) as 'alamat' 
    FROM customers

SELECT o.id, o.date, c.firstname
    FROM customers as c, orders, as o

## FUNCTION

SELECT avg(age) FROM customers
SELECT COUNT(age) FROM customers
SELECT min(age) FROM customers
SELECT max(age) FROM customers
SELECT sum(age) FROM customers

SELECT age, COUNT(age) FROM customers GROUP BY age;

SELECT age, COUNT(age) FROM customers GROUP BY age
    HAVING COUNT(age) >= 2;

SELECT UCASE(firstname), LCASE(firstname) FROM customers; //lower uppercase

*/

