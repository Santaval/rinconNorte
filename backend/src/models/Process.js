const { codeGenerator } = require('saval-codegen');
const pool = require('../database');

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
    const stagesTimes = JSON.stringify([new Date()]);

    const result = await pool.query(
      'INSERT INTO process (id, productid, milk, status, stagestimes) VALUES ($1, $2, $3, $4, $5)',
      [id, productId, milk, status, stagesTimes]
    );

    if (result.rowCount === 1)
      return {
        id,
        productId,
        milk,
        status,
      };
  }

  static async edit({
    id,
    milk,
    status,
    stagesTimes,
    currentStage,
    finishedAt,
    result,
  }) {
    const queryResult = await pool.query('UPDATE process SET ? WHERE id = ?', [
      {
        milk,
        status,
        stagesTimes,
        currentStage,
        finishedAt: new Date(finishedAt),
        result,
      },
      id,
    ]);

    if (queryResult.affectedRows === 1) {
      const process = await this.byId({ id });
      return process;
    }
  }

  static async delete({ id }) {
    const result = await pool.query('DELETE FROM process WHERE id = ?', [id]);

    if (result.affectedRows === 0) throw new Error('Error al eliminar proceso');
  }

  static async all() {
    const { rows: total } = await pool.query('SELECT COUNT(*) as total FROM process');
    const { rows: process } = await pool.query(
      'SELECT process.*, products.processStages,products.name,products.materials,products.measuramentUnit FROM process INNER JOIN products ON process.productId = products.id WHERE process.status != 3 ORDER BY createdAt DESC LIMIT 10'
    );
    return {
      total: +total[0].total,
      process,
      page: 1,
      pages: Math.ceil(total[0].total / 100),
    };
  }

  static async byId({ id }) {
    const { rows: result } = await pool.query(
      'SELECT process.*, products.* FROM process INNER JOIN products ON process.productId = products.id WHERE process.id = ?',
      [id]
    );

    if (result.length === 0) throw new Error('Proceso no encontrado');

    return result[0];
  }
}

module.exports = ProcessModel;
