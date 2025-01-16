const ProductRepository = require('../repositories/productRepository');

class ProductService {
  static async getAllProducts() {
    return ProductRepository.findAll();
  }

  static async getProductById(id) {
    return ProductRepository.findById(id);
  }

  static async createProduct(data) {
    return ProductRepository.create(data);
  }

  static async updateProduct(id, data) {
    return ProductRepository.update(id, data);
  }

  static async deleteProduct(id) {
    return ProductRepository.delete(id);
  }
}

module.exports = ProductService;
