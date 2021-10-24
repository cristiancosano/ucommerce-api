const OrderModel = require('../models/OrderModel')

class OrderController{

    static  orderModel = new OrderModel();
    static index = (request, response) => {
        this.orderModel.getAll().then(([data]) => response.send(data));

    }

    static create = (request, response) => {
        const orderNumber = request.body.orderNumber; //Usas body para obtener los parametros de la petición (en PostMan Body->Raw->JSON)
        const totalAmount = request.body.totalAmount;
        const orderDate = request.body.orderDate;
        const customerId = request.body.customerId;
        this.orderModel.create(orderNumber, totalAmount, orderDate, customerId).then(([data]) => response.send(data))

    }

    static read = (request, response) => {
        const id = request.params.id;
        this.orderModel.getById(id).then(([data]) => response.send(data));
    }

    static update = (request, response) => {
        const id = request.params.id;  //Usas params para obtener los parametros de la url (en CategoryRouter es :id)
        const orderNumber = request.body.orderNumber; //Usas body para obtener los parametros de la petición (en PostMan Body->Raw->JSON)
        const totalAmount = request.body.totalAmount;
        const orderDate = request.body.orderDate;
        const customerId = request.body.customerId;
        const order = {id, orderNumber, totalAmount, orderDate, customerId}
        this.orderModel.update(order).then(([data]) => response.send(data))
    }

    static delete = (request, response) => {
        const id = request.params.id;
        this.orderModel.delete(id).then(([data]) => response.send(data))

    }
}

module.exports = OrderController;