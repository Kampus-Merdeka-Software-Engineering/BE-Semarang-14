// import env from 'dotenv';
const dotenv = require('dotenv');
dotenv.config();

// import sequelize
const { Sequelize } = require('sequelize');

// // create database if not exists on localhost
// const mysql = require('mysql2/promise');
// mysql.createConnection({
//     host: process.env.MYSQLHOST,
//     user: process.env.MYSQLUSER,
//     password: process.env.MYSQLPASSWORD,
// }).then((connection) => {
//     connection.query(`CREATE DATABASE IF NOT EXISTS ${process.env.MYSQLDATABASE};`);
// });

// Sequelize connection
const sequelize = new Sequelize(
    process.env.MYSQLDATABASE,
    process.env.MYSQLUSER,
    process.env.MYSQLPASSWORD,
    {
        dialect: 'mysql',
        host: process.env.MYSQLHOST,
        port: process.env.MYSQLPORT,
        define: {
            timestamps: false,
        },
    }
);

// Test connection
sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
}).catch((error) => {
    console.error('Unable to connect to the database: ', error);
});

// export sequelize
module.exports = sequelize;