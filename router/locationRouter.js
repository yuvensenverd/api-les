var express = require('express')
var router = express.Router();

const { locationController } = require('../controller');

router.get('/getlocation/:slug', locationController.getLocation)

module.exports = router;
