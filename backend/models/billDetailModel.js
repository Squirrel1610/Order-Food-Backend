const knex = require("../database/knex_db.js");

module.exports = {
  //xem thông tin chi tiết theo hóa đơn
  async getBillDetail(id_hd) {
    let detailBills = await knex("chitiethoadon").select("*").where({
      id_hd: id_hd,
    });
    return detailBills;
  },

  //xem từng chi tiết hóa đơn
  async getEachBillDetail(id) {
    let detailBill = await knex("chitiethoadon").select("*").where({
      id: id,
    });
    return detailBill;
  },

  //thêm chi tiết hóa đơn
  async addBillDetail(billDetails) {
    let result = await knex("chitiethoadon").insert(billDetails);
    return result;
  },
};
