// import db config
const sequelize = require('../config/db_config');

// import model
const Pesan = require('../model/pesan.model');

// post pesan
exports.postPesan = async (req, res) => {
    try {
        // get data from body
        const { nama, email, subject, message } = req.body;

        // input validation
        if (!nama || !email || !subject || !message) {
            return res.status(400).send({
                message: 'nama, email, subject, message are required',
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
        // validation: subject
        else if (typeof subject !== 'string') {
            return res.status(400).send({
                message: 'subject must be a string',
            });
        }
        // validation: message
        else if (typeof message !== 'string') {
            return res.status(400).send({
                message: 'message must be a string',
            });
        }

        // insert data
        const pesan = await Pesan.create({
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