var express = require('express')
var router = express.Router();
// var { auth } = require('../helpers/auth');

const {  adminController  } = require('../controller');


router.post('/getUser', adminController.adminGetUser)
router.post('/getBlog', adminController.adminGetBlog)
router.post('/getSubscription', adminController.adminGetSubscription)

// router.post('/findBlog', blogController.getBlogs)


module.exports = router;