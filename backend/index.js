require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { sequelize, Product } = require('./models');
const app = express();

app.use(cors({
  origin: 'http://localhost:5173',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());

app.get('/products', async (req, res) => {
  const products = await Product.findAll();
  res.json(products);
});

app.get('/products/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Product.findByPk(id);
    if (!product) return res.status(404).json({ error: 'Produto não encontrado' });
    res.json(product);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.post('/products', async (req, res) => {
  const { name, price, description, stock } = req.body;
  try {
    const product = await Product.create({ name, price, description, stock });
    res.status(201).json(product);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.put('/products/:id', async (req, res) => {
  const { id } = req.params;
  const { name, price, description, stock } = req.body;
  try {
    const product = await Product.findByPk(id);
    if (!product) return res.status(404).json({ error: 'Produto não encontrado' });

    product.name = name || product.name;
    product.price = price || product.price;
    product.description = description || product.description;
    product.stock = stock || product.stock;

    await product.save();
    res.json(product);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.delete('/products/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Product.findByPk(id);
    if (!product) return res.status(404).json({ error: 'Produto não encontrado' });

    await product.destroy();
    res.json({ message: 'Produto deletado com sucesso' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, async () => {
  console.log(`Servidor rodando na porta ${PORT}`);
  await sequelize.sync({ force: false }); 
  console.log('Banco de dados sincronizado');
});
