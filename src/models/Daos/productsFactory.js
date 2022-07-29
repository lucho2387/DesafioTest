const ProductsDBMongo = require('./productsDBMongo')

class ProductsFactoryDAO {
    static get(tipo) {
        switch (tipo) {
            case 'mongo': return new  ProductsDBMongo(/*'ecommerce','productos'*/)
            // case 'mongo': return new  ProductsDBMongo()
            default: return console.log("error")
        }
    }
}

module.exports = ProductsFactoryDAO