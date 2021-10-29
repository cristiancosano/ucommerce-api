const Model = require('./Model')

class OrderModel extends Model{

    constructor(){
        super();
    }

    
    getAll(){
        return new Promise((resolve, reject) => {
            this.pool.execute(this.queries.Order.getAll).then(([data]) => {
                // console.log(data)
                // if(data.length > 0){
                //     let products = []
                //     let currentId = -1;
                //     for(let row of data){
                        
                //         if(currentId == row.orderId){ //Mismo pedido
                //             products[products.length-1].items.push({
                //                 unitPrice: row.unitPrice,
                //                 quantity: row.quantity,
                //                 product:{
                //                     id: row.productId,
                //                     name: row.name,
                //                     description: row.description,
                //                     category: {
                //                         id: row.categoryId,
                //                         name: row.categoryName
                //                     },
                //                     images: row.images
                //                 }      
                //             })
                //         }
                //         else{ //Nuevo pedido
                //             currentId = row.orderId
                //             products.push({
                //                 orderId: row.orderId, 
                //                 total: row.total, 
                //                 customerId: row.customerId,
                //                 createdAt: row.createdAt,
                //                 updatedAt: row.updatedAt,
                //                 items: new Array()
                //             })
                //         }
                //     }
                    resolve(data)
                // }
                // else{
                //     reject('Any product found in database')
                // }
            })
        });
    }

    getById(id){
        return new Promise((resolve, reject) => {
            this.pool.execute(this.queries.Order.getById, [ id ]).then(([data])=>{
                if(data.length > 0){
                    let object = {
                        orderId: data[0].orderId, 
                        total: data[0].total, 
                        customerId: data[0].customerId,
                        createdAt: data[0].createdAt,
                        updatedAt: data[0].updatedAt,
                        items: new Array()
                    }
                    for(let element of data){
                        console.log(element)
                        object.items.push({
                            unitPrice: element.unitPrice,
                            quantity: element.quantity,
                            product:{
                                id: element.productId,
                                name: element.name,
                                description: element.description,
                                category: {
                                    id: element.categoryId,
                                    name: element.categoryName
                                },
                                images: element.images
                            }                        
                        });
                    }
                    resolve(object)
                }
                else{
                    reject(`Order with id '${id}' not found`)
                }
            });
        })
        
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