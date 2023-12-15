const MilkModel = require("../models/Milk");

class MilkController {
  static async create(req, res) {
    try {
      const { liters, provider } = req.body;
      const milk = await MilkModel.create({
        liters, provider
      });
      res.status(201).json(milk);
    } catch (error) {
      res.status(500).json(error.message);
    }
  }

  static async edit(req, res) {
    try {
      const { id } = req.params;
      const { liters, provider } = req.body;
      const milk = await MilkModel.edit({
        id,
        liters,
        provider,
      });
      res.status(200).json(milk);
    } catch (error) {
      res.status(500).json(error.message);
    }
  }

  static async delete(req, res) {
    try {
      const { id } = req.params;
      await MilkModel.delete({
        id,
      });
      res.status(200).json({ message: "Leche eliminada" });
    } catch (error) {
      res.status(500).json(error.message);
    }
  }

  static async getAll(req, res) {
    try {
      const milk = await MilkModel.getAll();
      res.status(200).json(milk);
    } catch (error) {
      res.status(500).json(error.message);
    }
  }
}

module.exports = MilkController;
