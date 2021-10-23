const Model = require('./Model')

class DiscountModel extends Model{

    constructor(){
        super();
    }

    getAll(){
        return this.pool.execute(this.queries.Discount.getAll);
    }

    getById(id){
        return this.pool.execute(this.queries.Discount.getById, [ id ]);
    }

    update(Discount){
        return this.pool.execute(this.queries.Discount.update, [ Discount.rebaja, Discount.id ]);
    }

    delete(id){
        return this.pool.execute(this.queries.Discount.delete, [ id ]);
    }

    create(rebaja){
        return this.pool.execute(this.queries.Discount.create, [ rebaja ])
    }

}

module.exports = DiscountModel;