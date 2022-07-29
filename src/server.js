const express = require('express');
const helmet = require('helmet');
const compression = require('compression');
const logger = require('morgan');
const app = express();
// const config = require('./config/database/connection')
const dotenv = require('dotenv');

dotenv.config();

require('./config/database/connection');

app.use(logger('dev'));
app.use(compression());
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use((err, req, res, next) => {
    console.error(err.message);
    return res.status(500).send('Algo se rompio!');
});



const ProductsRouter = require('./routes/products');
const productRouter = new ProductsRouter()

app.use('/api', productRouter.start());


const PORT = process.env.PORT || 8080;

const server = app.listen(PORT, () => {
    console.log(`servidor escuchando en http://localhost:${PORT}`);
});


server.on('error', error => {
    console.log('error en el servidor:', error);
});
