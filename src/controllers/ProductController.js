const ProductModel = require('../models/ProductModel')

class ProductController{

    static  productModel = new ProductModel();
    static index = (request, response) => {
        this.productModel.getAll().then((data) => response.send(data)).catch(error => response.status(400).send(error))
    }

    static create = (request, response) => {
        const name = request.body.name;
        const categoryId = request.body.categoryId;
        const description = request.body.description;

         const unitPrice = request.body.unitPrice; 
         const images = request.body.images || null;
         const discountId = request.body.discountId || null;

         console.log(name, categoryId, unitPrice, images, discountId)
       
        this.productModel.create(name, description, categoryId, unitPrice, images, discountId).then(([data]) => response.send(data))
    }

    static read = (request, response) => {
        const id = request.params.id;
        this.productModel.getById(id).then(data => response.send(data)).catch(reason => response.status(400).send(reason))
    }

    static update = (request, response) => {
        const id = request.params.id; 
        const name = request.body.name;
        const categoryId = request.body.categoryId;
        const unitPrice = request.body.unitPrice; 
        const images = request.body.images || null;
        const discountId = request.body.discountId || null;
        const description = request.body.description;

        const product = { id, name, description, categoryId, unitPrice, images, discountId }

        this.productModel.update(product)
        .then(data => {
            response.send(data)
        }).catch(reason => response.status(400).send(reason))
    }

    static delete = (request, response) =>{
        const id = request.params.id;
        this.productModel.delete(id).then(([data]) => response.send(data))
    }

    static search = (request, response) =>{
        const text = request.body.text;
        this.productModel.getByText(text).then(data => response.send(data)).catch(reason => response.status(400).send(reason))
    }
}

module.exports = ProductController;