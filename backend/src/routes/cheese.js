const pool = require("../database");

const router = require("express").Router();

router.get("/cheese", async (req, res) => {
  try {
    const items = await pool.query("SELECT * FROM cheeseProduction");
    res.json(items).end();
  } catch (err) {
    console.log(err);
    res.status(500).send("Internal server error").end();
  }
});

router.get("/cheese/:id", async (req, res) => {
  try {
    const item = await pool.query(
      "SELECT * FROM cheeseProduction WHERE id = ?",
      [req.params.id]
    );
    res.json(item).end();
  } catch (err) {
    res.status(500).send("Internal server error").end();
  }
});

router.post("/cheese", async (req, res) => {
  try {
    const newItem = await pool.query("INSERT INTO cheeseProduction SET ?", [
      req.body,
    ]);
    console.log(newItem);
    res.json(newItem).end();
  } catch (err) {
    res.status(500).send("Internal server error").end();
  }
});

router.put("/cheese/:id", async (req, res) => {
    try {
        const updatedItem = await pool.query(
        "UPDATE cheeseProduction SET ? WHERE id = ?",
        [req.body, req.params.id]
        );
        console.log(updatedItem);
        res.json(updatedItem).end();
    } catch (err) {
        res.status(500).send("Internal server error").end();
    }
});

module.exports = router;
