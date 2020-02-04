var express = require('express')
var router = express.Router();
var { auth, resetToken } = require('../helpers/auth')

const { bookingOrderController } = require('../controller');

router.get('/', (req, res) =>
  res.status(200).json({
    message: '/Booking Order path',
  }),
);

router.post('/bookingClass', auth, bookingOrderController.bookingClass);
router.get('/getall', bookingOrderController.getAll);
router.post('/getbyuser', auth, bookingOrderController.getByUser);

module.exports = router;