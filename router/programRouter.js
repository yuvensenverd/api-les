var express = require('express')
var router = express.Router();

const { programController } = require('../controller');

router.get('/', (req, res) =>
  res.status(200).json({
    message: '/program path',
  }),
);

router.post('/add', programController.createClass)
router.get('/getAll', programController.getProgram)
router.get('/filterClass/:slug', programController.getFilteredClass)
router.post('/getOne', programController.getSelectedProgram)
router.post('/filter', programController.getByFilter)

module.exports = router;
