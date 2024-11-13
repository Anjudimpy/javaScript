import express from 'express'
import UserController from './src/controllers/user.controller.js';
import ProductController from './src/controllers/product.controller.js';
import ejsLayouts from 'express-ejs-layouts'
import path from 'path';
import validateRequest from './src/middlewares/validation.middleware.js';
import { uploadFile } from './src/middlewares/file-upload.middlewere.js';

const server = express();
server.use(express.static('public'));

// parse from data
server.use(express.urlencoded({extended:true}))
// setup view engine settings
server.set("view engine", "ejs");
// path of our views
server.set("views", path.join(path.resolve(),"src",'views')); 

server.use(ejsLayouts)

// create an instance of Controller
const productController = new ProductController(); 
const userController = new UserController();

server.get('/register', userController.getRegister);
server.get('/login', userController.getLogin);
server.post('/login',userController.postLogin);
server.post('/register', userController.postRegister);

server.get('/', productController.getProducts);
server.get('/new', productController.getAddForm);
server.post('/', uploadFile.single('imageUrl'), validateRequest, productController.addNewProduct);
server.get('/update-product/:id', productController.getUpdateProductView);
server.post('/delete-product/:id', productController.deleteProduct);
server.post('/update-product', productController.postUpdateProduct);

server.use(express.static('src/views'));
export default server