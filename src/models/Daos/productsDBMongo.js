const productDTO = require('../../dto/products')
const ProductsBaseDAO = require('./products') 
const Productos = require('../model/product')

// const mongodb = require('mongodb')
// const { MongoClient, ObjectId } = mongodb

// const dotenv = require('dotenv');

// dotenv.config();

// require('../../config/database/connection');

class ProductsDBMongo extends ProductsBaseDAO {
    constructor(/*database, collection*/) {
        super(Productos)
        // ;( async () => {
        //     const { NAME, NAME_DATABASE, PASSWORD } = process.env

        //     const url = `mongodb+srv://${NAME}:${PASSWORD}@cluster0.9xnml.mongodb.net/${NAME_DATABASE}?retryWrites=true&w=majority` 
        //     console.log(url)
        //     const connection =await MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
        //     const db = connection.db(database)
        //     this._collection = db.collection(collection)

        //     console.log("base de datos conectada")
        // })
    }

    obtenerProductos = async _id =>{
        try {
            if(_id) {
                const product = await this._collection.findOne({_id: ObjectId(_id)})
                return [product]
            }
            else {
                const products = await this._collection.findAll()
                return products
            }
        } catch (error) {
            console.log(error)
        }
    }

    guardarProducto = async product =>{
        try {
                await this._collection.insertOne(product)
                return product
        } 
        catch (error) {
            console.log(error)
            return product
        }
    }

    actualizarProducto = async (_id,product) => {
        try {
                await this._collection.updateOne({_id:ObjectId(_id)},{$set: product})
                return product
        } 
        catch (error) {
            console.log(error)
            return product
        }
    }

    eliminarProducto = async _id => {
        let deleteProduct = productDTO({},_id,null)
        try {
                await this._collection.deleteOne({_id:ObjectId(_id)})
                return deleteProduct
        } 
        catch (error) {
            console.log(error)
            return deleteProduct
        }
    }
}

module.exports = ProductsDBMongo