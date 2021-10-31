const Model = require('./Model')

class CartModel extends Model{

    constructor(){
        super();
    }

    getAll(customerId){
        return this.pool.execute(this.queries.Cart.getAll, [customerId]);
    }

    deleteAll(customerId){
        return this.pool.execute(this.queries.Cart.deleteAll, [ customerId ]);
    }

    update(quantity, customerId, productId){
        return this.pool.execute(this.queries.Cart.update, [quantity, customerId, productId]);
    }

    delete(productId, customerId){
        return this.pool.execute(this.queries.Cart.delete, [ productId, customerId]);
    }

    create(productId , customerId, quantity){
        return this.pool.execute(this.queries.Cart.create, [ productId, customerId, quantity])
    }

}

module.exports = CartModel;