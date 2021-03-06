var express = require('express')
var router = express.Router();
var { auth, resetToken } = require('../helpers/auth')

const { userController } = require('../controller')

router.post('/register', userController.registerUser);
router.post('/getstatus', userController.getStatus)
router.post('/emailVerification', auth, userController.verifyUser)
router.post('/resendVerification', auth, userController.resendVerification)


module.exports = router