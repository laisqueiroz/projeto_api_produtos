require('dotenv').config();
const express = require('express');
const cors = require('cors');
const productRoutes = require('./routes/productRoutes');

const app = express();

app.use(cors({
  origin: 'http://localhost:5173',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));

app.use(express.json());

// Rotas
app.use('/products', productRoutes);

module.exports = app;
