const { Product } = require('../models');

class ProductRepository {
  static async findAll() {
    return Product.findAll();
  }

  static async findById(id) {
    return Product.findByPk(id);
  }

  static async create(data) {
    return Product.create(data);
  }

  static async update(id, data) {
    const product = await Product.findByPk(id);
    if (!product) return null;

    Object.assign(product, data);
    return product.save();
  }

  static async delete(id) {
    const product = await Product.findByPk(id);
    if (!product) return null;

    await product.destroy();
    return true;
  }
}

module.exports = ProductRepository;
