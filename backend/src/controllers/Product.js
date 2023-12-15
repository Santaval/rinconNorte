class ProductController {
  static async create(req, res) {
    try {
      const { name, price, materials, processStages, measuramentUnit } =
        req.body;
      const product = await ProductModel.create({
        name,
        price,
        materials,
        processStages,
        measuramentUnit,
      });
      res.status(201).json(product);
    } catch (error) {
      res.status(500).json(error.message);
    }
  }

  static async edit(req, res) {
    try {
      const { id } = req.params;
      const { name, price, materials, processStages, measuramentUnit } =
        req.body;
      const product = await ProductModel.edit({
        id,
        name,
        price,
        materials,
        processStages,
        measuramentUnit,
      });
      res.status(200).json(product);
    } catch (error) {
      res.status(500).json(error.message);
    }
  }

  static async delete(req, res) {
    try {
      const { id } = req.params;
      await ProductModel.delete({
        id,
      });
      res.status(200).json({ message: "Producto eliminado" });
    } catch (error) {
      res.status(500).json(error.message);
    }
  }

  static async getAll(req, res) {
    try {
      const product = await ProductModel.getAll();
      res.status(200).json(product);
    } catch (error) {
      res.status(500).json(error.message);
    }
  }
}

module.exports = ProductController;