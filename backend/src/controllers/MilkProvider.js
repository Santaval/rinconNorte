const MilkProviderModel = require("../models/MilkProvider");

class MilkProvideController {
  static async create(req, res) {
    try {
      const { name } = req.body;
      const milkProvide = await MilkProviderModel.create({
        name,
      });
      res.status(201).json(milkProvide);
    } catch (error) {
      res.status(500).json(error.message);
    }
  }

  static async edit(req, res) {
    try {
      const { id } = req.params;
      const { name } = req.body;
      const milkProvide = await MilkProviderModel.edit({
        id,
        name,
      });
      res.status(200).json(milkProvide);
    } catch (error) {
      res.status(500).json(error.message);
    }
  }

  static async delete(req, res) {
    try {
      const { id } = req.params;
      await MilkProviderModel.delete({
        id,
      });
      res.status(200).json({ message: "proveedor eliminado" });
    } catch (error) {
      res.status(500).json(error.message);
    }
  }

  static async getAll(req, res) {
    try {
      const milkProvides = await MilkProviderModel.getAll();
      res.status(200).json(milkProvides);
    } catch (error) {
      res.status(500).json(error.message);
    }
  }
}

module.exports = MilkProvideController;
