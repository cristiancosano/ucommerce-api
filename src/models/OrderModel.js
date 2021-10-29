const Model = require('./Model')

class OrderModel extends Model{

    constructor(){
        super();
    }

    
    getAll(){
        return this.pool.execute(this.queries.Order.getAll);
    }

    getById(id){
        console.log(this.queries.Order.getById)
        return this.pool.execute(this.queries.Order.getById, [ id ]);
    }

    update(order){
        return this.pool.execute(this.queries.Order.update, [order.total, order.customerId, order.id]);
    }

    delete(id){
        return this.pool.execute(this.queries.Order.delete, [ id ]);
    }

    create(total, customerId){
        return this.pool.execute(this.queries.Order.create, [total, customerId])
    }
}

module.exports = OrderModel;