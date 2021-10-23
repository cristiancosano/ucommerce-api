const Model = require('./Model')

class ProductModel extends Model{

    constructor(){
        super();
    }

    getAll(){
        return this.pool.execute(this.queries.Product.getAll, []);
    }

    getById(id){
        return this.pool.execute(this.queries.Product.getProductById, [ id ]);
    }

    update(product){
        return this.pool.execute(this.queries.Product.update, [product.Name, product.UnitPrice, product.Image, product.id]);
    }

    delete(id){
        return this.pool.execute(this.queries.Product.delete, [ id ]);
    }
    create(Name, UnitPrice, Image, CategoryId, DiscountId){
        return this.pool.execute(this.queries.Product.create, [Name, CategoryId, UnitPrice, Image, DiscountId])
    }

    checkPassword(){

    }

}

module.exports = ProductModel;