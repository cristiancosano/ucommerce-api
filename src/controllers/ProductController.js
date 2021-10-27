const ProductModel = require('../models/ProductModel')

class ProductController{

    static  productModel = new ProductModel();
    static index = (request, response) => {
        this.productModel.getAll().then(([data]) => response.send(data));

    }

    static create = (request, response) => {
        const name = request.body.name;
        const categoryId = request.body.categoryId;

         const unitPrice = request.body.unitPrice || null; 
         const images = request.body.images || null;
         const discountId = request.body.discountId || null;
       
        this.productModel.create(name, categoryId, unitPrice, images, discountId).then(([data]) => response.send(data))
    }

    static read = (request, response) => {
        const id = request.params.id;
        this.productModel.getById(id).then(([data]) => response.send(data));
    }

    static update = (request, response) =>{
        const id = request.params.id; 
        const name = request.body.name;
        const categoryId = request.body.categoryId;
        const unitPrice = request.body.unitPrice || null; 
        const images = request.body.images || null;
        const discountId = request.body.discountId || null;

        const product={ id, name, categoryId, unitPrice, images, discountId }
        this.productModel.update(product).then(([data]) => response.send(data))
    }

    static delete = (request, response) =>{
        const id = request.params.id;
        this.productModel.delete(id).then(([data]) => response.send(data))
    }

    static search = (request, response) =>{
        const text = request.body.text;
        this.productModel.getByText(text).then(([data]) => response.send(data))
    }
}

module.exports = ProductController;