// import sequelize
const { Sequelize, DataTypes } = require('sequelize');

// import db config
const sequelize = require('../config/db_config');

// import model
const Course = require('../model/course.model');

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
            references: {
                model: Course,
                key: 'id',
            },
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
        bergabung_pada: {
            type: DataTypes.DATE,
            defaultValue: Sequelize.NOW,
        },
    }
);

// create table if not exists
(async () => {
    await sequelize.sync();
})();

// export model
module.exports = Peserta;