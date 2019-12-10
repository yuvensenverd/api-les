const { Category, Sequelize } = require('../models');
const Op = Sequelize.Op;

module.exports = {
    allCategory: (req, res) => {
        Category.findAll({
            attributes: [ 'name' , 'image', 'id', 'info']
        })
        .then((results) => {
            return res.status(200).send(results)
        })
        .catch((err) => {
            console.log(err)
        })
    }
}