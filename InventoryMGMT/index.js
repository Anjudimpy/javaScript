import express from 'express'
import UserController from './src/controllers/user.controller.js';
import ProductController from './src/controllers/product.controller.js';
import ejsLayouts from 'express-ejs-layouts'
import path from 'path';
import validateRequest from './src/middlewares/validation.middleware.js';
import { uploadFile } from './src/middlewares/file-upload.middlewere.js';
import session from 'express-session';
import { auth } from './src/middlewares/auth.middleware.js';

const server = express();

server.use(express.static('public'));

server.use(
    session({
        secret: 'SecretKey',
        resave: false,
        saveUninitialized: true,
        cookie: {secure: false},
    })
);

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
server.get('/logout', userController.logout);

server.get('/',auth, productController.getProducts);
server.get('/new',auth, productController.getAddForm);
server.post('/',auth, uploadFile.single('imageUrl'), validateRequest, productController.addNewProduct);
server.get('/update-product/:id',auth, productController.getUpdateProductView);
server.post('/delete-product/:id', auth, productController.deleteProduct);
server.post('/update-product', auth, productController.postUpdateProduct);

server.use(express.static('src/views'));
export default server