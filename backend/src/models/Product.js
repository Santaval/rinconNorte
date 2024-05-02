const pool = require("../database");
const {codeGenerator} = require("saval-codegen")

class ProductModel {

    static async create({ name, price, materials, processStages, measuramentUnit }) {
        const id = codeGenerator(10);
        const result = await pool.query("INSERT INTO products SET ?", {
            id,
            name,
            price,
            materials: JSON.stringify(materials),
            processStages: JSON.stringify(processStages), 
            measuramentUnit
        });
        if (result.affectedRows === 1) return { id, name, price, materials, processStages, measuramentUnit};
        throw new Error("Error al crear producto");
    }

    static async edit({ id, name, price, materials, processStages, measuramentUnit }) {
        const result = await pool.query("UPDATE products SET ? WHERE id = ?", [
            { name, price, materials, processStages, measuramentUnit },
            id,
        ]);
        if (result.affectedRows === 1) return  { id, name, price, materials, processStages, measuramentUnit};
        throw new Error("Error al editar producto");
    }

    static async delete({ id }) {
        const result = await pool.query("DELETE FROM products WHERE id = ?", [id]);

        if (result.affectedRows === 0) throw new Error("Error al eliminar producto");
    }

    static async all() {
        const {rows: total} = await pool.query("SELECT COUNT(*) as total FROM products");
        const {rows:  result} = await pool.query("SELECT * FROM products LIMIT 100");
        return {
            total: +total[0].total,
            products: result,
            page: 1,
            pages: Math.ceil(total[0].total / 100),
        };
    }
}

module.exports = ProductModel;