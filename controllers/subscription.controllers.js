// import db config
const sequelize = require('../config/db_config');

// import model
const Subscription = require('../model/subscription.model');

// post subscription
exports.postSubscription = async (req, res) => {
    try {
        //get data from body
        const { email } = req.body;

        // input validation
        if (!email) {
            return res.status(400).send({
                message: 'email is required',
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

        // duplicate email validation
        const isEmailExist = await Subscription.findOne({
            where: {
                email,
            },
        });
        if (isEmailExist) {
            return res.status(400).send({
                message: 'email already exist',
            });
        }

        // insert data
        const subscription = await Subscription.create({
            email,
        });

        // send response
        res.status(200).send({
            message: 'add subscription success',
            data: subscription,
        });
    } catch (err) {
        console.log(err);
    }
};