var express = require('express')
var router = express.Router();
var { auth, resetToken } = require('../helpers/auth')

const { userController } = require('../controller')

router.post('/register', userController.registerUser);
router.post('/getstatus', userController.getStatus);
router.post('/registerWithGoogle', userController.registerWithGoogle);
router.post('/registerWithFacebook', userController.registerWithFacebook);
router.post('/loginWithGoogle', userController.loginWithGoogle);
router.post('/loginWithFacebook', userController.loginWithFacebook);
router.post('/keepLogin', auth, userController.keepLogin)
router.post('/emailVerification', auth, userController.verifyUser)
router.post('/resendVerification', auth, userController.resendVerification)


module.exports = router