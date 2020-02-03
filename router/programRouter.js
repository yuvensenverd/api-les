var express = require('express')
var router = express.Router();
var { auth, resetToken } = require('../helpers/auth')

const { programController } = require('../controller');

router.get('/', (req, res) =>
  res.status(200).json({
    message: '/program path',
  }),
);

router.post('/add', programController.createClass)
router.post('/getAll', programController.getProgram)
router.get('/filterClass/:slug', programController.getFilteredClass)
router.post('/getOne', programController.getSelectedProgram)
router.post('/filter', programController.getByFilter)
router.post('/addPageView', programController.addPageViewProgram)
router.post('/bookingClass', auth, programController.bookingClass)

module.exports = router;
