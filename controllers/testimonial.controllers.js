// import db config
const sequelize = require('../config/db_config');

// import model
const Testimonial = require('../model/testimonial.model');
const Peserta = require('../model/peserta.model');

// get all testimonial random
exports.getAllTestimonial = async (req, res) => {
    try {
        const testimonial = await Testimonial.findAll({
            order: sequelize.random(),
            include: [
                {
                    model:Peserta,
                    as: "pesertaDetails",
                    attributes: ['nama', 'photo']
                }
            ]
        });
        res.status(200).send({
            message: 'get all testimonial success',
            data: testimonial,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Terjadi kesalahan dalam mengambil data testimonial.' });
    }
};

// get 2 testimonial random
exports.getTwoTestimonial = async (req, res) => {
    try {
        const testimonial = await Testimonial.findAll({
            order: sequelize.random(),
            limit: 2,
            include: [
                {
                    model:Peserta,
                    as: "pesertaDetails",
                    attributes: ['nama', 'photo']
                }
            ]
        });
        res.status(200).send({
            message: 'get 2 testimonial success',
            data: testimonial,
        });
    } catch (err) {
        res.json({ message: err });
    }
};

