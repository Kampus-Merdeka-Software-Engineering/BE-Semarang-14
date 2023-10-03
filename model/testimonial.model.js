// import sequelize
const { Sequelize, DataTypes } = require('sequelize');

// import db config
const sequelize = require('../config/db_config');

// create model
const Testimonial = sequelize.define (
    'testimonial',
    {
        id_testimonial: {
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
        photo: {
            type: DataTypes.STRING,
        },
        testimoni: {
            type: DataTypes.STRING,
        },
    }
);

// create table if not exists
(async () => {
    await sequelize.sync();
})();

// export model
module.exports = Testimonial;