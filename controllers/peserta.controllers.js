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

        // input validation
        if (!id_course || !nama || !email || !no_hp) {
            return res.status(400).send({
                message: 'id_course, nama, email, no_hp are required',
            });
        } 
        // validation: nama
        else if (typeof nama !== 'string') {
            return res.status(400).send({
                message: 'nama must be a string',
            });
        } 
        // validation: email
        else if (typeof email !== 'string') {
            return res.status(400).send({
                message: 'email must be a string',
            });
        } else if (!email.includes('@')) {
            return res.status(400).send({
                message: 'email must be valid',
            });
        }
        // validation: no_hp
        else if (typeof no_hp !== 'string') {
            return res.status(400).send({
                message: 'no_hp must be a string',
            });
        } else if (no_hp.length < 10 || no_hp.length > 13) {
            return res.status(400).send({
                message: 'no_hp must be valid',
            });
        }

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

// get peseerta by id
exports.getPesertaById = async (req, res) => {
    try {
        const { id } = req.params;
        const peserta = await Peserta.findOne({
            where: {
                id,
            },
        });
        res.status(200).send({
            message: 'get peserta by id success',
            data: peserta,
        });
    } catch (err) {
        console.log(err);
    }
};