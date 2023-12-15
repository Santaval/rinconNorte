class ProcessModel {
  static STATUS = {
    NOT_STARTED: 0,
    ON_PROCESS: 1,
    FINISHED: 2,
    CANCELED: 3,
  };

  static async create({ productId, milk }) {
    const id = codeGenerator(10);
    const status = this.STATUS.NOT_STARTED;

    const result = await pool.query("INSERT INTO process SET ?", {
      id,
      productId,
      milk,
      status,
    });

    if (result.affectedRows === 1)
      return {
        id,
        productId,
        milk,
        status,
      };
  }

    static async edit({ id, productId, milk, status }) {
        const result = await pool.query("UPDATE process SET ? WHERE id = ?", [
        { productId, milk, status },
        id,
        ]);
    
        if (result.affectedRows === 1)
        return {
            id,
            productId,
            milk,
            status,
        };
    }

    static async delete({ id }) {
        const result = await pool.query("DELETE FROM process WHERE id = ?", [id]);
    
        if (result.affectedRows === 0) throw new Error("Error al eliminar proceso");
    }

    static async getAll({ page }) {
        const total = await pool.query("SELECT COUNT(*) FROM process");
        const result = await pool.query("SELECT * FROM process LIMIT 10 OFFSET ?", [(page - 1) * 10]);
        return {
            total: total[0]["COUNT(*)"],
            result,
            page: page,
            pages: Math.ceil(total[0]["COUNT(*)"] / 10),
        };
    }
}
