const Model = require('./Model')

class ProductModel extends Model{

    constructor(){
        super();
    }

    getByText(text){
        return new Promise((resolve, reject) =>{
            this.pool.execute(this.queries.Product.getByText, [text, text]).then(([data]) => resolve(data)).catch(error => reject(error));
        })
    }

    getAll(){
        return new Promise((resolve, reject) => {
            this.pool.execute(this.queries.Product.getAll).then(([data]) => resolve(data)).catch(error => reject(error))
        })
    }

    getById(id){
        return new Promise((resolve, reject) => {
            this.pool.execute(this.queries.Product.getById, [ id ]).then(([data]) => resolve(data[0])).catch(error => reject(error))
        })
    }

    getProductsByCategory(id){
        return new Promise((resolve, reject) => {
            this.pool.execute(this.queries.Product.getByCategoryId, [ id ]).then(([data]) => resolve(data)).catch(error => reject(error))
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