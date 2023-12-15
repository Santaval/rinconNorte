const IngredientModel = require("../models/Ingredient.js");

class IngredientController {
  static async create(req, res) {
    try {
      const { name, measuramentUnit } = req.body;
      const ingredient = await IngredientModel.create({
        name,
        measuramentUnit,
      });
      res.status(201).json(ingredient);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  static async all(req, res) {
    try {
      const ingredients = await IngredientModel.all();
      res.json(ingredients);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
}

module.exports = IngredientController;
