var express = require('express')
var router = express.Router();

const { blogController  } = require('../controller');

router.post('/GenerateURL', blogController.generateImgUrlquill)
router.post('/deleteFileQuill', blogController.deleteFileQuill)


module.exports = router;