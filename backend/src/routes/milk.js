const router = require('express').Router();
const MilkController = require('../controllers/Milk');

router.post('/', MilkController.create);
router.put('/:id', MilkController.edit);
router.delete('/:id', MilkController.delete);
router.get('/', MilkController.getAll);

module.exports = router;