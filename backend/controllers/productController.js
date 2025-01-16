const ProductService = require('../services/productService');

class ProductController {
  static async getAllProducts(req, res) {
    try {
      const products = await ProductService.getAllProducts();
      res.json(products);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async getProductById(req, res) {
    const { id } = req.params;
    try {
      const product = await ProductService.getProductById(id);
      if (!product) return res.status(404).json({ error: 'Produto não encontrado' });
      res.json(product);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  static async createProduct(req, res) {
    try {
      const product = await ProductService.createProduct(req.body);
      res.status(201).json(product);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  static async updateProduct(req, res) {
    const { id } = req.params;
    try {
      const product = await ProductService.updateProduct(id, req.body);
      if (!product) return res.status(404).json({ error: 'Produto não encontrado' });
      res.json(product);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  static async deleteProduct(req, res) {
    const { id } = req.params;
    try {
      await ProductService.deleteProduct(id);
      res.json({ message: 'Produto deletado com sucesso' });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
}

module.exports = ProductController;
