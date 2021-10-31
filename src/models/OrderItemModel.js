const Model = require('./Model')

class OrderItemModel extends Model{

    constructor(){
        super();
    }

    
    getAll(order){
        return this.pool.execute(this.queries.OrderItem.getAll, [ order]);
    }

    getById(order,product){
        return this.pool.execute(this.queries.OrderItem.getById, [ order, product ]);
    }

    update(unitPrice, quantity, order, product){
        return this.pool.execute(this.queries.OrderItem.update, [unitPrice, quantity,order, product]);
    }

    delete(order, product){
        return this.pool.execute(this.queries.OrderItem.delete, [ order,product ]);
    }

    deleteAll(order){
        return this.pool.execute(this.queries.OrderItem.deleteAll, [ order ]);
    }

    create(quantity, orderId, productId){
        return this.pool.execute(this.queries.OrderItem.create, [quantity, orderId, productId, productId])
    }
}

module.exports = OrderItemModel;