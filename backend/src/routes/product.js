const router = require("express").Router();
const ProductController = require("../controllers/Product");

router.post("/", ProductController.create);
router.delete("/:id", ProductController.delete);
router.get("/", ProductController.all);

module.exports = router;
