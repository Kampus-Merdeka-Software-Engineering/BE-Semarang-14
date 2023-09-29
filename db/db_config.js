// import env from 'dotenv';
const dotenv = require('dotenv');
dotenv.config();

// import mysql
const mysql = require('mysql');

// create connection to database
const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

// connect to database
connection.connect((err) => {
    if (err) throw err;
    console.log('Connected to database');
});

// export db connection
module.exports = {
    connection: connection
};