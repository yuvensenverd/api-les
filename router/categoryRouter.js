var express = require('express')
var router = express.Router();

const { categoryController } = require('../controller');

router.get('/listCategory', categoryController.allCategory);

module.exports = router;