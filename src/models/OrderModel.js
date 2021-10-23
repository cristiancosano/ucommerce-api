const Model = require('./Model')

class OrderModel extends Model{

    constructor(){
        super();
    }

    
    getAll(){
        return this.pool.execute(this.queries.Order.getAll, []);
    }

    getById(id){
        return this.pool.execute(this.queries.Order.getById, [ id ]);
    }

    update(order){
        return this.pool.execute(this.queries.Order.update, [order.OrderNumber,order.TotalAmount,order.OrderDate,order.CustomerId, order.id]);
    }

    delete(id){
        return this.pool.execute(this.queries.Order.delete, [ id ]);
    }

    create(OrderNumber,TotalAmount,OrderDate,CustomerId){
        return this.pool.execute(this.queries.Order.create, [OrderNumber,TotalAmount,OrderDate,CustomerId])
    }
}

module.exports = OrderModel;