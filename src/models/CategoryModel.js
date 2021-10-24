const Model = require('./Model')

class CategoryModel extends Model{

    constructor(){
        super();
    }

    getAll(){
        return this.pool.execute(this.queries.Category.getAll);
    }

    getById(id){
        return this.pool.execute(this.queries.Category.getById, [ id ]);
    }

    update(category){
        return this.pool.execute(this.queries.Category.update, [category.name, category.id]);
    }

    delete(id){
        return this.pool.execute(this.queries.Category.delete, [ id ]);
    }

    create(name){
        return this.pool.execute(this.queries.Category.create, [ name ])
    }

}

module.exports = CategoryModel;