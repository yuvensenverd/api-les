const { Category, Sequelize } = require('../models');
const Op = Sequelize.Op;

module.exports = {
    allCategory: (req, res) => {
        Category.findAll({
            attributes: [ 'name' , 'image', 'id', 'info', 'slug']
        })
        .then((results) => {
            return res.status(200).send(results)
        })
        .catch((err) => {
            return res.status(500).send({ status: 'error', message: err})
        })
    },

    findCategory: (req, res) => {
        Category.findOne({
            attributes: ['name', 'slug'],
            where : {
                slug: req.body.slug
            }
        })
        .then((results) => {
            console.log(results)
            if(results !== null) {
                return res.status(200).send({
                    results: true,
                    name: results.dataValues.name
                })
            } else {
                return res.status(200).send({
                    results: false
                })
            }
        })
        .catch((err) => {
            return res.status(500).send({ status: 'error', message: err})
        })
    }
}