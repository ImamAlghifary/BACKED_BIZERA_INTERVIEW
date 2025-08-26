const express = require('express');
const products = require('../datas/productData');
const { v4: uuidv4 } = require('uuid');
const validateProducts  = require('../middlewares/validateProducts');

const router = express.Router();

//get all products
router.get('/', (req, res) => {
     res.json(products);
});

//add a new product
router.post('/', validateProducts, (req, res) => {
  const newProduct = {
    id: uuidv4(),
    ...req.body
  };
  products.push(newProduct);
  res.status(201).json(newProduct);
});

//get a product by id
router.get('/:id', (req, res) => {
    const productId = req.params.id; 
    const product = products.find(p => p.id === productId);
    if (product) {
        res.json(product);
    } else {
        res.status(404).json({ message: 'Product not found' });
    }
});

//update a product by id
router.put('/:id', validateProducts, (req, res) => {
    const productId = req.params.id;
    const updatedProduct = req.body;
    const index = products.findIndex(p => p.id === productId);
    if (index !== -1) {
        products[index] = { ...products[index], ...updatedProduct };
        res.json(products[index]);
    } else {
        res.status(404).json({ message: 'Product not found' });
    }
});

//delete a product by id
router.delete('/:id', (req, res) => {
    const productId = req.params.id; 
    const index = products.findIndex(p => p.id === productId);
    if (index !== -1) {     
        products.splice(index, 1);
        res.json({ message: 'Product deleted' });
    } else {
        res.status(404).json({ message: 'Product not found' });     
    }
});


module.exports = router;