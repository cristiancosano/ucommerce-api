const OrderModel = require('../models/OrderModel')
const OrderItemModel = require('../models/OrderItemModel')
const ProductModel = require ('../models/ProductModel')
class OrderController{

    static orderModel = new OrderModel();
    static orderItemModel = new OrderItemModel();
    static productModel = new ProductModel();

    static index = (request, response) => {
        this.orderModel.getAll().then(data => response.send(data)).catch(reason => response.status(400).send(reason))
    }

    static create = async (request, response) => {
        const total = request.body.total;
        const customerId = request.token.customerId;
        let items = request.body.items || null;

    

        this.orderModel.create(total, customerId).then(data => {
            if(items != null)
                if(typeof items == 'string') items = JSON.parse(items)
                for (let item of items)
                    this.orderItemModel.create(item.quantity, data.insertId, item.productId)
            response.send(data)
        })
        .catch(error => response.status(400).send(error));
    }

    static read = (request, response) => {
        const id = request.params.id;
        this.orderModel.getById(id).then(data => response.send(data)).catch(reason => response.status(400).send(reason));
    }
    static readCustomer = (request, response) => {
        const customer = request.params.customer;
        this.orderModel.getByCustomer(customer).then(data => 
            {
                response.send(data)
            }
            ).catch(reason => response.status(400).send(reason))
          ;
    }

    static update = (request, response) => {
        const id = request.params.id;
        const total = request.body.total;
        const customerId = request.token.customerId;
        const items = request.body.items || null;

        const order = {id,total, customerId}

        this.orderModel.update(order).then(([data]) => {

            if(items != null){
                this.orderItemModel.deleteAll(id)
                for (let item of items)
                this.orderItemModel.create(item.quantity, id, item.productId)    
            }
            response.send(data)
        })
        .catch(error => response.status(400).send(error))
    }

    static delete = (request, response) => {
        const id = request.params.id;
        this.orderModel.delete(id).then(data => response.send(data)).catch(error => response.status(400).send(error));
    }
}

module.exports = OrderController;