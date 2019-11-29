var express = require('express')
var router = express.Router();

const { blogController  } = require('../controller');

router.post('/GenerateURL', blogController.generateImgUrlquill)
router.post('/deleteFileQuill', blogController.deleteFileQuill)
router.post('/insertBlog', blogController.insertBlog)
router.post('/getBlog', blogController.getBlog)
router.get('/getAllBlog', blogController.getAllBlog)


module.exports = router;