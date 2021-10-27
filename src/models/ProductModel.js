const Model = require('./Model')

class ProductModel extends Model{

    constructor(){
        super();
    }

    getByText(text){
        return this.pool.execute(this.queries.Product.getByText, [text, text]);
    }

    getAll(){
        return this.pool.execute(this.queries.Product.getAll);
    }

    getById(id){
        return this.pool.execute(this.queries.Product.getById, [ id ]);
    }

    update(product){
        return this.pool.execute(this.queries.Product.update, [product.name, product.categoryId, product.unitPrice, product.images, product.discountId, product.id]);
    }

    delete(id){
        return this.pool.execute(this.queries.Product.delete, [ id ]);
    }
    create(name, categoryId, unitPrice, images, discountId){
        return this.pool.execute(this.queries.Product.create, [name, categoryId, unitPrice, images, discountId])
    }

}

module.exports = ProductModel;