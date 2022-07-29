const mongoose = require('mongoose');

const { NAME, NAME_DATABASE, PASSWORD } = process.env

const url = `mongodb+srv://${NAME}:${PASSWORD}@cluster0.9xnml.mongodb.net/${NAME_DATABASE}?retryWrites=true&w=majority` 

const connection = mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });

mongoose.connection.on('connected', () => {
    console.log(`BD ${NAME_DATABASE} Conectada`)
});

mongoose.connection.on('error', (err) => {
    console.error(err)
});

module.exports = connection;

// const dotenv = require('dotenv');
// const path= require ('path')

// dotenv.config({
//     path: path.resolve(process.cwd(),process.env.NODE_ENV + '.env')
// })

// module.export = {
//     NODE_ENV: process.env.NODE_ENV || 'development',
//     HOST: process.env.HOST || 'localhost',
//     PORT: process.env.PORT || '8080',
//     TIPO_PERSISTENCIA: process.env.TIPO_PERSISTENCIA || 'mongo',

// }