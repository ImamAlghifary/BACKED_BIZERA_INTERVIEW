const express = require('express');
const productRoute = require('./routes/product');
const errorHandler = require('./middlewares/errorHandler');

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    res.send('backend')
})

app.use('/product', productRoute);

app.use(errorHandler);

app.listen(3000, () => {
    console.log('running')
})
