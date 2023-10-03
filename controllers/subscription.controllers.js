// import db config
const sequelize = require('../config/db_config');

// import model
const Subscription = require('../model/subscription.model');

// post subscription
exports.postSubscription = async (req, res) => {
    try {
        //get data from body
        const { id_subscription, email, joined_at } = req.body;

        // insert data
        const subscription = await Subscription.create({
            id_subscription,
            email,
            joined_at,
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