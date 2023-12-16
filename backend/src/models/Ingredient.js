const pool = require("../database");
const { codeGenerator } = require("saval-codegen");

class IngredientModel {
  static async create({ name, measuramentUnit }) {
    const id = codeGenerator(10);
    const result = pool.query(
      `INSERT INTO ingredients (id,name, measuramentUnit) VALUES (?,?,?)`,
      [id, name, measuramentUnit]
    );

    if (result.affectedRows === 0) throw new Error("Ingredient not created");

    return { id, name, measuramentUnit };
  }

  static async all() {
    const result = await pool.query(`SELECT * FROM ingredients`);
    return result;
  }

  static async delete({ id }) {
    const result = await pool.query(`DELETE FROM ingredients WHERE id = ?`, [
      id,
    ]);
    if (result.affectedRows === 0) throw new Error("Ingredient not deleted");
  }

  static async byId({ id }) {
    const result = await pool.query(`SELECT * FROM ingredients WHERE id = ?`, [
      id,
    ]);

    if (result.length === 0) throw new Error("Ingredient not found");
    return result[0];
  }
}

module.exports = IngredientModel;
