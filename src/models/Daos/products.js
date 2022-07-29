class ProductsBaseDAO {
    getNext_Id(products) {
        let longitud = products.length
        return longitud? parseInt(products[longitud-1]._id) + 1 : 1
    }

    getIndex(_id,products) {
        return products.finIndex(product => product? product._id == _id: true)
    }
}

module.exports = ProductsBaseDAO