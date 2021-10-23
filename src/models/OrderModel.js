const Model = require('./Model')

class OrderModel extends Model{

    constructor(){
        super();
    }

    
    getAll(){
        return this.pool.execute(this.queries.Order.getAll);
    }

    getById(id){
        return this.pool.execute(this.queries.Order.getById, [ id ]);
    }

    update(order){
        return this.pool.execute(this.queries.Order.update, [order.orderNumber, order.totalAmount, order.orderDate, order.customerId, order.id]);
    }

    delete(id){
        return this.pool.execute(this.queries.Order.delete, [ id ]);
    }

    create(orderNumber, totalAmount, drderDate,customerId){
        return this.pool.execute(this.queries.Order.create, [orderNumber, totalAmount, orderDate, customerId])
    }
}

module.exports = OrderModel;