import express from 'express'
import ProductController from './src/controllers/product.controller.js';
import ejsLayouts from 'express-ejs-layouts'
import path from 'path';
import validateRequest from './src/middlewares/validation.middleware.js';

const server = express();

// parse from data
server.use(express.urlencoded({extended:true}))
// setup view engine settings
server.set("view engine", "ejs");
// path of our views
server.set("views", path.join(path.resolve(),"src",'views')); 

server.use(ejsLayouts)

// create an instance of ProductController
const productController = new ProductController(); 
server.get('/', (productController.getProducts));
server.get('/new', productController.getAddForm);
server.post('/', validateRequest, productController.addNewProduct);
server.get('/update-product/:id', productController.getUpdateProductView);
server.get('/delete-product/:id', productController.deleteProduct);
server.post('/update-product', productController.postUpdateProduct);

server.use(express.static('src/views'));
export default server