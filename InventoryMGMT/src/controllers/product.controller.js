import path from 'path';
import ProductModel from '../models/product.model.js';
import { error } from 'console';

export default class ProductController{

    getProducts(req,res){
        let products = ProductModel.get()
        console.log(products);
        res.render("products",{products: products})
        // return res.sendFile(path.join(path.resolve(),"src",'views',"products.html" ));
    }

    getAddForm(req, res) {
        return res.render('new-product', {
            errorMessage:null,
        });
    }

    addNewProduct(req,res, next) {
     //validate data
        console.log(req.body)
        ProductModel.add(req.body)
        let products = ProductModel.get()
        res.render('products', {products:products})
    }
}