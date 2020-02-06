var express = require('express')
var router = express.Router();

const { topClassHomeController } = require('../controller')


router.post('/getAllTop', topClassHomeController.getAllTopClass)

module.exports = router;