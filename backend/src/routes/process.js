const router = require("express").Router();
const ProcessController = require("../controllers/Process");

router.post("/", ProcessController.create);
router.put("/:id", ProcessController.edit);
router.delete("/:id", ProcessController.delete);
router.get("/", ProcessController.all);
router.get("/:id", ProcessController.byId);

module.exports = router;
