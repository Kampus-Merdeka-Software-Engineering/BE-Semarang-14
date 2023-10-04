// import sequelize
const { Sequelize, DataTypes } = require('sequelize');

// import db config
const sequelize = require('../config/db_config');

// import model
const Course = require('../model/courses.model');

// create model
const Peserta = sequelize.define(
    'peserta',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        id_course: {
            type: DataTypes.STRING,
            // references: {
            //     model: Course,
            //     key: 'id',
            // },
        },
        nama: {
            type: DataTypes.STRING,
        },
        email: {
            type: DataTypes.STRING,
        },
        no_hp: {
            type: DataTypes.STRING,
        },
        photo: {
            type: DataTypes.STRING,
            defaultValue: 'default_peserta.jpg',
        },
        bergabung_pada: {
            type: DataTypes.DATE,
            defaultValue: Sequelize.NOW,
        },
    }
);

// export model
module.exports = Peserta;