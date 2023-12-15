class Milk {
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

  static async getAll() {
    const result = await pool.query("SELECT * FROM milk");
    return result;
  }
}


module.exports = Milk;