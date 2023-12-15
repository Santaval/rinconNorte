const router = require("express").Router();
const IngredientController = require("../controllers/Ingredient");

router.post("/", IngredientController.create);
router.get("/", IngredientController.all);

module.exports = router;
