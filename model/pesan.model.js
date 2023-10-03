// import sequelize
const { Sequelize, DataTypes } = require('sequelize');

// import db config
const sequelize = require('../config/db_config');

// create model
const Pesan = sequelize.define (
    'pesan',
    {
        id_pesan: {
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
            type: DataTypes.STRING, 
        },
    }
);

// create table if not exists
(async () => {
    await sequelize.sync();
})();

// export model
module.exports = Pesan;