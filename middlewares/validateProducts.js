const validateProduct = (req, res, next) => {
  const { name, price, stock, category } = req.body;

  if (!name || typeof name !== 'string' || name.trim() === '') {
    return res.status(400).json({ message: 'Name cannot be empty' });
  }

  if (typeof price !== 'number' || price < 0) {
    return res.status(400).json({ message: 'Price must be >= 0' });
  }

  if (typeof stock !== 'number'  || stock < 0) {
    return res.status(400).json({ message: 'Stock must be an integer >= 0' });
  }

  if (typeof category !== 'string' || category.trim() === '') {
    return res.status(400).json({ message: 'Category must be a string' });
  }

  next(); 
}

module.exports = validateProduct;
