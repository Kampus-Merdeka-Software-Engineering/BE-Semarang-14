// import db config
const sequelize = require('../config/db_config');

// import model
const Pesan = require('../model/pesan.model');

// post pesan
exports.postPesan = async (req, res) => {
    try {
        // get data from body
        const { id_pesan, nama, email, subject, message } = req.body;

        // insert data
        const pesan = await Pesan.create({
            id_pesan,
            nama,
            email,
            subject,
            message,
        });

        // send response
        res.status(200).send({
            message: 'add pesan success',
            data: pesan,
        });
    } catch (err) {
        console.log(err);
    }
};