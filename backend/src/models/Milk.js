const {codeGenerator} = require("saval-codegen");
const pool = require("../database");

class MilkModel {
  static async create({ liters, provider }) {
    const id = codeGenerator(10);
    const result = await pool.query("INSERT INTO milk SET ?", {
      id,
      liters,
      provider,
    });
    if (result.affectedRows === 1) return { id, liters, provider };
    throw new Error("Error al crear leche");
  }

  static async edit({ id, liters, provider }) {
    const result = await pool.query("UPDATE milk SET ? WHERE id = ?", [
      { liters, provider },
      id,
    ]);
    if (result.affectedRows === 1) return { id, liters, provider };
    throw new Error("Error al editar leche");
  }

  static async delete({ id }) {
    const result = await pool.query("DELETE FROM milk WHERE id = ?", [id]);

    if (result.affectedRows === 0) throw new Error("Error al eliminar leche");
  }

  static async getAll({page}) {
    const total = await pool.query("SELECT COUNT(*) FROM milk");
    const result = await pool.query("SELECT * FROM milk LIMIT 10 OFFSET ?", [(page - 1) * 10]);
    return {
        total: total[0]["COUNT(*)"],
        result,
        page: page,
        pages: Math.ceil(total[0]["COUNT(*)"] / 10),
    };
  }
}


module.exports = MilkModel;