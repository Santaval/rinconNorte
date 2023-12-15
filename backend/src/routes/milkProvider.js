const router = require('express').Router();
const MilkProvideController = require('../controllers/MilkProvider');


router.post('/', MilkProvideController.create);
router.put('/:id', MilkProvideController.edit);
router.delete('/:id', MilkProvideController.delete);
router.get('/', MilkProvideController.getAll);


module.exports = router;