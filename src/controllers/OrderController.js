const UserModel = require('../models/OrderModel')

class OrderController{

    static  orderModel = new OrderModel();
    static index(request, response){

    }

    static create(request, response){

    }

    static read(request, response){
        const id = request.params.id;
        const order = this.OrderModel.getById(id);

        response.send(order);
    }

    static update(request, response){
        const id = request.params.id;

    }

    static delete(request, response){
        const id = request.params.id;

    }
}

module.exports = OrderController;