const OrderModel = require('../models/OrderModel')

class OrderController{

    static  orderModel = new OrderModel();
    
    static index = (request, response) => {
        this.orderModel.getAll().then(([data]) => response.send(data));

    }

    static create = (request, response) => {
        const total = request.body.total;
        const customerId = request.body.customerId;
        this.orderModel.create(total, customerId).then(([data]) => response.send(data))

    }

    static read = (request, response) => {
        const id = request.params.id;
        this.orderModel.getById(id).then(([data]) => response.send(data));
    }

    static update = (request, response) => {
        const id = request.params.id;  //Usas params para obtener los parametros de la url (en CategoryRouter es :id)
        const total = request.body.total;
        const customerId = request.body.customerId;
        const order = {id,total, customerId}
        this.orderModel.update(order).then(([data]) => response.send(data))
    }

    static delete = (request, response) => {
        const id = request.params.id;
        this.orderModel.delete(id).then(([data]) => response.send(data))

    }
}

module.exports = OrderController;