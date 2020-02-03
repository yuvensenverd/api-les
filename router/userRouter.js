var express = require('express')
var router = express.Router();
var { auth, resetToken } = require('../helpers/auth')

const { userController } = require('../controller')

router.post('/register', userController.registerUser);
router.post('/login', userController.loginUser);
router.post('/getstatus', userController.getStatus);
router.post('/registerWithGoogle', userController.registerWithGoogle);
router.post('/registerWithFacebook', userController.registerWithFacebook);
router.post('/loginWithGoogle', userController.loginWithGoogle);
router.post('/loginWithFacebook', userController.loginWithFacebook);
router.post('/keepLogin', auth, userController.keepLogin)
router.post('/emailVerification', auth, userController.verifyUser)
router.post('/resendVerification', auth, userController.resendVerification);

router.post('/subscribeList', userController.subscribeUser);
router.post('/sendTokenReset', userController.sendResetPasswordToken);
router.get('/verifyResetToken', resetToken, userController.userCheckResetToken);
router.post('/newPasswordUser', resetToken, userController.userResetPassword);

router.post('/addUserData', auth, userController.addUserData);
router.post('/changePassword', auth, userController.changeUserPassword);

module.exports = router