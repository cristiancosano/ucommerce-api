const ProductModel = require('../models/ProductModel')

class ProductController{

    static  productModel = new ProductModel();
    static index = (request, response) => {
        this.productModel.getAll().then(([data]) => response.send(data));

    }

    static create = (request, response) => {
        const name = request.body.name; //Usas body para obtener los parametros de la petición (en PostMan Body->Raw->JSON)
        const categoryId = request.body.categoryId;
        const unitPrice = request.body.unitPrice;
        const images = request.body.images;
        const discountId = request.body.discountId;
        this.productModel.create(name, categoryId, unitPrice, images, discountId).then(([data]) => response.send(data))

    }

    static read = (request, response) => {
        const id = request.params.id;
        this.productModel.getById(id).then(([data]) => response.send(data));
    }

    static update = (request, response) => {
        const id = request.params.id;  //Usas params para obtener los parametros de la url (en CategoryRouter es :id)
        const Name = request.body.OrderNumber; //Usas body para obtener los parametros de la petición (en PostMan Body->Raw->JSON)
        const CategoryId = request.body.CategoryId;
        const UnitPrice = request.body.UnitPrice;
        const Image = request.body.Image;
        const product= {id,Name,CategoryId,UnitPrice,Image,product}
        this.productModel.update(product).then(([data]) => response.send(data))

    }

    static delete = (request, response) => {
        const id = request.params.id;
        this.productModel.delete(id).then(([data]) => response.send(data))

    }
}

module.exports = ProductController;