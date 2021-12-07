const knex = require("../database/knex_db");

module.exports = {
  async getAllCategories() {
    let categories = await knex("danhmuc").select("*");
    return categories;
  },
  async insertCategory(category) {
    let result = await knex("danhmuc").insert(category).returning("id");
    //returning(id) => tra ve id da tao
    return result;
  },
  async updateCategory(category, id) {
    let result = await knex("danhmuc").update(category).where("id", id);
    return result;
  },
  async deleteCategory(category, id) {
    let result = await knex("danhmuc").update(category).where("id", id);
    return result;
  },
};
