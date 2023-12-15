const { codeGenerator } = require("saval-codegen");
const pool = require("../database");

class MilkProviderModel {
  /**
   * Create new milk provider
   * @param {*} param0
   * @returns
   */
  static async create({ name }) {
    const id = codeGenerator(10);
    const result = await pool.query("INSERT INTO milkProviders SET ?", {
      id,
      name,
    });
    if (result.affectedRows === 1) return { id, name };
    throw new Error("Error al crear proveedor de leche");
  }

  /**
   * Edit milk provider
   */

  static async edit({ id, name }) {
    const result = await pool.query("UPDATE milkProviders SET ? WHERE id = ?", [
      { name },
      id,
    ]);
    if (result.affectedRows === 1) return { id, name };
    throw new Error("Error al editar proveedor de leche");
  }

  /**
   * Delete milk provider
   */
  static async delete({ id }) {
    const result = await pool.query("DELETE FROM milkProviders WHERE id = ?", [
      id,
    ]);

    if (result.affectedRows === 0)
      throw new Error("Error al eliminar proveedor de leche");
  }

    /**
     * Get all milk providers
     */
    static async getAll(){
        const result = await pool.query('SELECT * FROM milkProviders')
        return result
    }
}

module.exports = MilkProviderModel;
