const OrderModel = require('../models/OrderModel')
const OrderItemModel = require('../models/OrderItemModel')
const ProductModel = require ('../models/ProductModel')
class OrderController{

    static  orderModel = new OrderModel();
    static orderItemModel = new OrderItemModel();
    static productModel = new ProductModel();

    static index = (request, response) => {
        this.orderModel.getAll().then(([data]) => response.send(data));

    }

    static create = async (request, response) => {
        const total = request.body.total;
        const customerId = request.token.customerId;
        const items = request.body.items || null;

        this.orderModel.create(total, customerId).then(([data]) => {
            if(items != null && data != null && data.insertId != undefined){
                for (let x in items){
                    this.productModel.getById(items[x].productId).then(([product]) => {

                    if(product != undefined && items != undefined && data.insertId != undefined)
                        this.orderItemModel.create(product[0].unitPrice, items[x].quantity, data.insertId, items[x].productId)
                    
                    });
                }
            }
            response.send(data)
        })
    }

    static read = (request, response) => {
        const id = request.params.id;
        this.orderModel.getById(id).then(([data]) => (data.length > 0) ? response.send(data[0]) : response.status(404).send('Order not found'));
    }

    static update = (request, response) => {
        const id = request.params.id;  //Usas params para obtener los parametros de la url (en CategoryRouter es :id)
        const total = request.body.total;
        const customerId = request.token.customerId;
        const items = request.body.items || null;

        const order = {id,total, customerId}

        this.orderModel.update(order).then(([data]) => {

              if(items != null && data != null && id != undefined)
              {

                  this.orderItemModel.deleteAll(id) //Elimina la lista de productos de la orden
               
                  for (let x in items){
                     //Añade los productos con la orden a la lista
                        this.productModel.getById(items[x].productId).then(([product]) => 
                        {

                             if(product != undefined && items != undefined && id != undefined)
                              {
                                 //console.log(product[0].unitPrice,items[x].quantity,id,items[x].productId)
                              this.orderItemModel.create(product[0].unitPrice, items[x].quantity, id, items[x].productId)
                        }
                    
                       })
                }
            }
            response.send(data)
        })
    }

    static delete = (request, response) => {
        const id = request.params.id;
        this.orderItemModel.deleteAll(id).then(([data]) => { //Elimina la lista de productos de la orden
       
       
            this.orderModel.delete(id).then((data2) => response.send(data))

        })

    }
}

module.exports = OrderController;