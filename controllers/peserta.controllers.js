// import db config
const sequelize = require('../config/db_config');

// import model
const Peserta = require('../model/peserta.model');
const Course = require('../model/courses.model');

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

        // update jumlah peserta
        const course = await Course.findOne({
            where: {
                id: id_course,
            },
        });
        const jumlah_peserta = course.jumlah_peserta + 1;
        await Course.update(
            {
                jumlah_peserta,
            },
            {
                where: {
                    id: id_course,
                },
            }
        );

        // send response
        res.status(200).send({
            message: 'add peserta success',
            data: peserta,
        });
    } catch (err) {
        console.log(err);
    }
};