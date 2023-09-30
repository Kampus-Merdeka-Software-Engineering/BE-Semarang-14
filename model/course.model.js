// import sequelize
const { Sequelize, DataTypes } = require('sequelize');

// import db config
const sequelize = require('../config/db_config');

// create model
const Course = sequelize.define(
    'course',
    {
        id: {
            type: DataTypes.STRING,
            primaryKey: true,
        },
        nama: {
            type: DataTypes.STRING,
        },
        deskripsi_singkat: {
            type: DataTypes.STRING,
        },
        deskripsi_panjang: {
            type: DataTypes.STRING,
        },
        rating: {
            type: DataTypes.DECIMAL,
        },
        harga: {
            type: DataTypes.INTEGER,
        },
        photo: {
            type: DataTypes.STRING,
        },
    },
);

// export model
module.exports = Course;