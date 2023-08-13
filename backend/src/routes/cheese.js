const pool = require("../database");

const router = require("express").Router();

router.get("/cheese", async (req, res) => {
  try {
    const items = await pool.query("SELECT * FROM cheeseProduction");
    if (req.query.activeOnly) {
      const activeItems = items.filter((item) => item.kg === null);
      res.json(activeItems).end();
      return;
    }
    else if (req.query.finishedOnly) {
      const finishedItems = items.filter((item) => item.kg !== null);
      res.json(finishedItems).end();
      return;
    }
    else {
      res.json(items).end();
    }
  } catch (err) {
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
  if (req.body.milk) {
    req.body.milk = JSON.stringify(req.body.milk);
  }

  req.body.date = new Date();

  try {
    await pool.query("INSERT INTO cheeseProduction SET ?", [req.body]);
    res.send("Item added").end();
  } catch (err) {
    console.log(err);
    res.status(500).send("Internal server error").end();
  }
});

router.put("/cheese/:id", async (req, res) => {
  if (req.body.milk) {
    req.body.milk = JSON.stringify(req.body.milk);
  }

  if (req.body.reposeStart) {
    req.body.reposeStart = new Date(req.body.reposeStart);
  }

  if (req.body.rennetStart) {
    req.body.rennetStart = new Date(req.body.rennetStart);
  }
  try {
    const updatedItem = await pool.query(
      "UPDATE cheeseProduction SET ? WHERE id = ?",
      [req.body, req.params.id]
    );
    res.json(updatedItem).end();
  } catch (err) {
    console.log(err);
    res.status(500).send("Internal server error").end();
  }
});

module.exports = router;
