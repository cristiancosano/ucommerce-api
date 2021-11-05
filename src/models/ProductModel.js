const Model = require('./Model')

class ProductModel extends Model{

    constructor(){
        super();
    }

    getByText(text){
<<<<<<< HEAD
        return new Promise((resolve, reject) =>{
            this.pool.execute(this.queries.Product.getByText, [text, text]).then(([data]) => resolve(data)).catch(error => reject(error));
=======
        return new Promise((resolve, reject) => {
            this.pool.execute(this.queries.Product.getByText, [text, text]).then(([data]) => {
                (data.length) ? resolve(data) : reject('Don`t found product with this text')
            });
>>>>>>> 1c01cfe7de90fbb3fb47b68875c680a6ab3682e4
        })
    }

    getAll(){
        return new Promise((resolve, reject) => {
            this.pool.execute(this.queries.Product.getAll).then(([data]) => resolve(data)).catch(error => reject(error))
        })
    }

    getById(id){
        return new Promise((resolve, reject) => {
            this.pool.execute(this.queries.Product.getById, [ id ]).then(([data]) => {
                (data.length) ? resolve(data) : reject(`Product with id '${id}' not found`)
            })
        })
    }

    update(product){
        return new Promise((resolve, reject) => {
            console.log(product)
            this.pool.execute(this.queries.Product.update, [product.name, product.description, product.categoryId, product.unitPrice, product.images, product.discountId, product.id])
            .then(([data]) => {
                resolve(data)
            }).catch(error => {
                reject(error)
            })
        }) 
    }

    delete(id){
        return this.pool.execute(this.queries.Product.delete, [ id ]);
    }
    create(name, description, categoryId, unitPrice, images, discountId){
        console.log(name, description, categoryId, unitPrice, images, discountId)
        return this.pool.execute(this.queries.Product.create, [name, description, categoryId, unitPrice, images, discountId])
    }

}

module.exports = ProductModel;