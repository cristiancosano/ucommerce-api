const OrderModel = require('../models/OrderModel')
const OrderItemModel = require('../models/OrderItemModel')
class OrderController{

    static  orderModel = new OrderModel();
    static orderItemModel = new OrderItemModel();

    static index = (request, response) => {
        this.orderModel.getAll().then(([data]) => response.send(data));

    }

    static create = async (request, response) => {
        const total = request.body.total;
        const customerId = request.token.customerId;
        const items = request.body.items || null;

        this.orderModel.create(total, customerId).then(([data]) => {
            if(items != null && data != null && data.insertId != undefined){
                for (x in items){
                    this.orderItemModel.create(x.unitPrice, x.quantity, data.insertId, x.productId)
                }
            }
            response.send(data)
        })
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