var express = require('express')
var router = express.Router();

const { lecturerController } = require('../controller');

router.get('/', (req, res) =>
  res.status(200).json({
    message: '/lecturer path',
  }),
);

router.post('/add', lecturerController.add)
router.get('/getall', lecturerController.getAll)
router.get('/getbyuser', lecturerController.getByUserid)
router.get('/getone', lecturerController.getByid)


module.exports = router;
