// Inspiration taken from https://medium.com/@mhagemann/create-a-mysql-database-middleware-with-node-js-8-and-async-await-6984a09d49f4

var mysql = require("mysql");

require("dotenv").config();

const connection = mysql.createConnection({
    host: 'eu-cdbr-west-02.cleardb.net',
    user: 'b1d2261bcf0b9c',
    password: 'f2a605be',
    database: 'heroku_1497b96276bdbc5'
});
connection.connect((err) => {
    if (err) throw err;
    console.log('Connected with database/mysql successfully!');
});


module.exports = connection;