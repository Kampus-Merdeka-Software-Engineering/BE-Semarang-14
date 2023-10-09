// import sequelize
const { Sequelize, DataTypes } = require('sequelize');

// import db config
const sequelize = require('../config/db_config');

// import model
const Peserta = require('../model/peserta.model');

// create model
const Testimonial = sequelize.define (
    'testimonial',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        id_peserta: {
            type: DataTypes.INTEGER,
            // references: {
            //     model: Course,
            //     key: 'id',
            // },
        },
        testimoni: {
            type: DataTypes.TEXT,
        },
        rating: {
            type: DataTypes.INTEGER,
        },
    },
);

Testimonial.belongsTo(Peserta, {
    foreignKey: "id_peserta",
    as: "pesertaDetails",
    onDelete: "CASCADE",
});

// export model
module.exports = Testimonial;