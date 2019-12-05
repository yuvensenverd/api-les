var express = require('express')
var router = express.Router();
var { auth } = require('../helpers/auth');

const { blogController  } = require('../controller');

router.post('/GenerateURL', blogController.generateImgUrlquill);
router.post('/deleteFileQuill', blogController.deleteFileQuill);
router.post('/insertBlog', blogController.insertBlog);
router.post('/getBlog', blogController.getBlog);
router.post('/getAllBlog', blogController.getAllBlog);
router.post('/downloadebook', blogController.downloadEbook);
// router.post('/findBlog', blogController.getBlogs)


module.exports = router;