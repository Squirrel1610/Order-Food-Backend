const knex = require("../database/knex_db.js");

module.exports = {
  //lấy ra giỏ hàng của khách hàng đang đăng nhập
  async getCartOfUser(idUser) {
    let data = await knex("giohang").select("*").where("id_nd", idUser);
    return data;
  },

  //thêm sản phẩm vào giỏ hàng của khách hàng đăng nhập
  async addCartItem(cartItem) {
    let result = await knex("giohang").insert(cartItem);
    return result;
  },

  //chỉnh sửa số lượng sản phẩm trong giỏ hàng
  async updateProductQuantity(cartItem) {
    let result = await knex("giohang").update(cartItem).where({
      id_nd: cartItem.id_nd,
      id_sp: cartItem.id_sp,
    });
    return result;
  },

  //xóa sản phẩm trong giỏ hàng
  async deleteCartItem(id) {
    let result = await knex("giohang").del().where({
      id: id,
    });
    return result;
  },

  //xóa toàn bộ trong giỏ hàng
  async deleteAllCartItems(idUser) {
    let result = await knex("giohang").del().where({
      id_nd: idUser,
    });
    return result;
  },
};
