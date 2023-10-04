// import sequelize
const { Sequelize, DataTypes } = require('sequelize');

// import db config
const sequelize = require('../config/db_config');

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