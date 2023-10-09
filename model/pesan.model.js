// import sequelize
const { Sequelize, DataTypes } = require('sequelize');

// import db config
const sequelize = require('../config/db_config');

// create model
const Pesan = sequelize.define (
    'pesan',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        nama: {
            type: DataTypes.STRING,
        },
        email: {
            type: DataTypes.STRING,
        },
        subject: {
            type: DataTypes.STRING,
        },
        message: {
            type: DataTypes.TEXT, 
        },
    }
);

// export model
module.exports = Pesan;