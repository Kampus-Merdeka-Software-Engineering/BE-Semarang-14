// import db config
const sequelize = require('../config/db_config');

// import model
const Course = require('../model/course.model');

// get all courses
exports.getAllCourses = async (req, res) => {
    try {
        const courses = await Course.findAll();
        res.status(200).send({
            message: 'get all courses success',
            data: courses,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Terjadi kesalahan dalam mengambil data kursus.' });
    }
};


// get course by id
exports.getCourseById = async (req, res) => {
    try {
        const course = await Course.findOne({
            where: {
                id: req.params.id,
            },
        });
        res.json(course);
    } catch (err) {
        res.json({ message: err });
    }
};