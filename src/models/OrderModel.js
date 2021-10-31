const Model = require('./Model')

class OrderModel extends Model{

    constructor(){
        super();
    }

    
    getAll(){
        return new Promise((resolve, reject) => {
            this.pool.execute(this.queries.Order.getAll).then(([data]) => resolve(data)).catch(error => reject(error))
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
        return new Promise((resolve, reject) => {
            this.pool.execute(this.queries.Order.update, [order.total, order.customerId, order.id]).then(([data]) => resolve(data)).catch(error => reject(error))
        })
    }

    delete(id){
        return new Promise((resolve, reject) => {
            this.pool.execute(this.queries.Order.delete, [ id ]).then(([data])=> resolve(data)).catch(error => reject(error))
        })
    }

    create(total, customerId){
        return new Promise((resolve, reject) =>{
            this.pool.execute(this.queries.Order.create, [total, customerId]).then(([data])=>{
                if(data != null && data.insertId != undefined) resolve(data);
                else reject('Error executing database method for create a order');
            })
            .catch(error => reject(error))
        }) 
    }
}

module.exports = OrderModel;