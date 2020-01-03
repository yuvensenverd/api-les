var express = require('express')
var router = express.Router();

const { locationController } = require('../controller');

router.get('/getlocation/:slug', locationController.getLocation)
router.get('/getAll', locationController.getAll)
router.get('/getAllName', locationController.getAllName)

module.exports = router;
