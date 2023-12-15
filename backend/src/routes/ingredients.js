const router = require("express").Router();
const IngredientController = require("../controllers/Ingredient");

router.post("/", IngredientController.create);
router.get("/", IngredientController.all);
router.delete("/:id", IngredientController.delete);

module.exports = router;
