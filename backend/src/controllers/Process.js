const ProcessModel = require("../models/Process");

class ProcessController {
  static async create(req, res) {
    try {
      const { product, milk } = req.body;
      const process = await ProcessModel.create({
        productId: product,
        milk,
      });
      res.status(201).json(process);
    } catch (error) {
      console.log(error);
      res.status(500).json(error.message);
    }
  }

  static async edit(req, res) {
    try {
      const { id } = req.params;
      const { product, milk, status } = req.body;
      const process = await ProcessModel.edit({
        id,
        productId: product,
        milk,
        status,
      });
      res.status(200).json(process);
    } catch (error) {
      res.status(500).json(error.message);
    }
  }

  static async delete(req, res) {
    try {
      const { id } = req.params;
      await ProcessModel.delete({
        id,
      });
      res.status(200).json({ message: "Proceso eliminado" });
    } catch (error) {
      res.status(500).json(error.message);
    }
  }

  static async all(req, res) {
    try {
      const process = await ProcessModel.all();
      res.status(200).json(process);
    } catch (error) {
      console.log(error);
      res.status(500).json(error.message);
    }
  }
}


module.exports = ProcessController;