import express from 'express';
import ProductController from './src/controllers/product.controllers.js'

const server = express()

//create an instance of ProductController
const productController = new ProductController()
server.get('/', productController.getProducts)

server.use(express.static('src/views'))

server.listen(3400)