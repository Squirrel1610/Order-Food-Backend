const knex = require("../database/knex_db.js");

module.exports = {
  async addBillDetail(billDetails) {
    let result = await knex("chitiethoadon").insert(billDetails);
    return result;
  },
};
