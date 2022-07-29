const config = require('./config/config')
const express = require('express');
const helmet = require('helmet');
const compression = require('compression');
const logger = require('morgan');
const ProductsRouter = require('./routes/products');
// const dotenv = require('dotenv');

// dotenv.config();

const app = express();



app.use(logger('dev'));
app.use(compression());
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use((err, req, res, next) => {
    console.error(err.message);
    return res.status(500).send('Algo se rompio!');
});




const productRouter = new ProductsRouter()

app.use('/api', productRouter.start());


const PORT = config.PORT || 8080;

const server = app.listen(PORT, () => {
    console.log(
        `Servidor express escuchando en el puerto ${PORT} (${config.NODE_ENV} - ${config.TIPO_PERSISTENCIA})`
)})


server.on('error', error => {
    console.log('error en el servidor:', error);
});

