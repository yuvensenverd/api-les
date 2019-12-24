var express = require('express')
var router = express.Router();

const { categoryController } = require('../controller');

router.get('/listCategory', categoryController.allCategory);
router.post('/findCategory', categoryController.findCategory);

module.exports = router;