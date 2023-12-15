class ProductModel {

    static async create({ name, price, materials, processStages }) {
        const id = codeGenerator(10);
        const result = await pool.query("INSERT INTO product SET ?", {
            id,
            name,
            price,
            materials,
            processStages
        });
        if (result.affectedRows === 1) return { id, name, price, stock, category };
        throw new Error("Error al crear producto");
    }

    static async edit({ id, name, price, materials, processStages }) {
        const result = await pool.query("UPDATE product SET ? WHERE id = ?", [
            { name, price, materials, processStages },
            id,
        ]);
        if (result.affectedRows === 1) return { id, name, price, stock, category };
        throw new Error("Error al editar producto");
    }

    static async delete({ id }) {
        const result = await pool.query("DELETE FROM product WHERE id = ?", [id]);

        if (result.affectedRows === 0) throw new Error("Error al eliminar producto");
    }

    static async getAll({ page }) {
        const total = await pool.query("SELECT COUNT(*) FROM product");
        const result = await pool.query("SELECT * FROM product LIMIT 10 OFFSET ?", [(page - 1) * 10]);
        return {
            total: total[0]["COUNT(*)"],
            result,
            page: page,
            pages: Math.ceil(total[0]["COUNT(*)"] / 10),
        };
    }
}