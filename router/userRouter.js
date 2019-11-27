var express = require('express')
var router = express.Router();
var { auth, resetToken } = require('../helpers/auth')

const { userController } = require('../controller')

router.post('/register', userController.registerUser);
router.post('/getstatus', userController.getStatus);
router.post('/registerWithGoogle', userController.registerWithGoogle);
router.post('/registerWithFacebook');
router.post('/loginWithGoogle', userController.loginWithGoogle);
router.post('/loginWithFacebook', userController.loginWithFacebook);

module.exports = router