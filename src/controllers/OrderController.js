const OrderModel = require('../models/OrderModel')

class OrderController{

    static  orderModel = new OrderModel();
    static index(request, response){
        this.orderModel.getAll().then(([data]) => response.send(data));

    }

    static create(request, response){
        const OrderNumber = request.body.OrderNumber; //Usas body para obtener los parametros de la petición (en PostMan Body->Raw->JSON)
        const TotalAmount = request.body.TotalAmount;
        const OrderDate = request.body.OrderDate;
        const CustomerId = request.body.CustomerId;
        this.orderModel.create(OrderNumber,TotalAmount,OrderDate,CustomerId).then(([data]) => response.send(data))

    }

    static read(request, response){
        const id = request.params.id;
        this.orderModel.getById(id).then(([data]) => response.send(data));
    }

    static update(request, response){
        const id = request.params.id;  //Usas params para obtener los parametros de la url (en CategoryRouter es :id)
        const OrderNumber = request.body.OrderNumber; //Usas body para obtener los parametros de la petición (en PostMan Body->Raw->JSON)
        const TotalAmount = request.body.TotalAmount;
        const OrderDate = request.body.OrderDate;
        const CustomerId = request.body.CustomerId;
        const order = {id,OrderNumber,TotalAmount,OrderDate,CustomerId}
        this.orderModel.update(order).then(([data]) => response.send(data))

    }

    static delete(request, response){
        const id = request.params.id;
        this.orderModel.delete(id).then(([data]) => response.send(data))

    }
}

module.exports = OrderController;