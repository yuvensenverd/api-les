var express = require('express')
var router = express.Router();

const { locationController } = require('../controller');

router.get('/getlocation/:slug', locationController.getLocation)
router.post('/getAll', locationController.getAll)
router.get('/getAllName', locationController.getAllName)
router.get('/getAvailableCity', locationController.showAvailableCity)

module.exports = router;
