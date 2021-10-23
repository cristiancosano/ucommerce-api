const ProductModel = require('../models/ProductModel')

class ProductController{

    static  productModel = new ProductModel();
    static index = (request, response) => {
        this.productModel.getAll().then(([data]) => response.send(data));

    }

    static create = (request, response) => {
        const Name = request.body.name; //Usas body para obtener los parametros de la petición (en PostMan Body->Raw->JSON)
        const CategoryId = request.body.categoryId;

         let UnitPrice = null; 
         let Image = null;
         let DiscountId = null;

        if(request.body.unitPrice != undefined){
            UnitPrice = request.body.unitPrice; 
               }           
      

        if(request.body.Image != undefined){
        Image = request.body.image;
        }
       
        if(request.body.DiscountId != undefined){
        DiscountId = request.body.discountId;
        }
       
        this.productModel.create(Name, CategoryId,UnitPrice,Image,DiscountId).then(([data]) => response.send(data))

    }

    static read = (request, response) => {
        const id = request.params.id;
        this.productModel.getById(id).then(([data]) => response.send(data));
    }

    static update = (request, response) =>{
        const Name = request.body.name; //Usas body para obtener los parametros de la petición (en PostMan Body->Raw->JSON)
        const CategoryId = request.body.categoryId;

         let UnitPrice = null; 
         let Image = null;
         let DiscountId = null;

        if(request.body.unitPrice != undefined){
            UnitPrice = request.body.unitPrice; 
               }           
      

        if(request.body.Image != undefined){
        Image = request.body.image;
        }
       
        if(request.body.DiscountId != undefined){
        DiscountId = request.body.discountId;
        }
        const id = request.params.id; 

        const product={id,Name,CategoryId,UnitPrice,Image,DiscountId}
        this.productModel.update(product).then(([data]) => response.send(data))

    }

    static delete = (request, response) =>{
        const id = request.params.id;
        this.productModel.delete(id).then(([data]) => response.send(data))

    }
}

module.exports = ProductController;