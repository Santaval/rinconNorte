const router = require("express").Router();
require("dotenv").config();

router.post("/access", async (req, res) => {
  const access = process.env.ACCESS_TOKEN;

  if (req.body.token === access) {
    res.send({ access: true });
  } else {
    res.send({ access: false });
  }
});

module.exports = router;
