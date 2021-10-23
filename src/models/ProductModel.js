const Model = require('./Model')

class ProductModel extends Model{

    constructor(){
        super();
    }

    getAll(){
        return this.pool.execute(this.queries.Product.getAll, []);
    }

    getById(id){
        return this.pool.execute(this.queries.Product.getById, [ id ]);
    }

    update(product){
        return this.pool.execute(this.queries.Product.update, [product.Name, product.CategoryId, product.UnitPrice, product.Image, product.DiscountId, product.id]);
    }

    delete(id){
        return this.pool.execute(this.queries.Product.delete, [ id ]);
    }
    create(Name, CategoryId, UnitPrice, Image, DiscountId){
        return this.pool.execute(this.queries.Product.create, [Name, CategoryId, UnitPrice, Image, DiscountId])
    }

    checkPassword(){

    }

}

module.exports = ProductModel;