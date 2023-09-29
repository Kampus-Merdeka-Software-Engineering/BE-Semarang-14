// import db config
const sequelize = require('../config/db_config');

// import model
const Peserta = require('../model/peserta.model');

// post peserta
exports.postPeserta = async (req, res) => {
    try {
        // get data from body
        const { id_course, nama, email, no_hp } = req.body;

        // insert data
        const peserta = await Peserta.create({
            id_course,
            nama,
            email,
            no_hp,
        });

        // send response
        res.status(200).send({
            message: 'success',
            data: peserta,
        });
    } catch (err) {
        console.log(err);
    }
};