// import env from 'dotenv';
const dotenv = require('dotenv');
dotenv.config();

// import sequelize
const { Sequelize } = require('sequelize');

// import mysql2
const mysql = require('mysql2/promise');

// create database if not exists
mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
}).then((connection) => {
    connection.query(`CREATE DATABASE IF NOT EXISTS ${process.env.DB_NAME};`);
});

// Sequelize connection
const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        dialect: 'mysql',
        host: process.env.DB_HOST,
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