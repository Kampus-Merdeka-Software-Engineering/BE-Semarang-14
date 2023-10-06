// import db config
const sequelize = require('../config/db_config');

// import model
const Testimonial = require('../model/testimonial.model');

// get all testimonial random
exports.getAllTestimonial = async (req, res) => {
    try {
        const testimonial = await Testimonial.findAll({
            order: sequelize.random(),
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
        });
        res.status(200).send({
            message: 'get 2 testimonial success',
            data: testimonial,
        });
    } catch (err) {
        res.json({ message: err });
    }
};