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
                (data.length) ? resolve(data) : reject(`Order with id '${id}' not found`)
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
            this.pool.execute(this.queries.Order.create, [total, customerId])
                .then(([data])=>(data.insertId != undefined) ? resolve(data) : reject(data))
                .catch(error => reject(error))
        }) 
    }
}

module.exports = OrderModel;