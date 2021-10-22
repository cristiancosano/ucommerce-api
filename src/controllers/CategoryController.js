const CategoryModel = require('../models/CategoryModel')

class CategoryController{

    static  categoryModel = new CategoryModel();
    static index = (request, response) => {
        this.categoryModel.getAll().then(([data]) => response.send(data));
    }

    static create = (request, response) => {
        const name = request.body.name;
        this.categoryModel.create(name).then(([data]) => response.send(data));
    }

    static read = (request, response) =>{
        const id = request.params.id;
        this.categoryModel.getById(id).then(([data]) => response.send(data));
    }

    static update = (request, response) => {
        const id = request.params.id;  //Usas params para obtener los parametros de la url (en CategoryRouter es :id)
        const name = request.body.name; //Usas body para obtener los parametros de la petición (en PostMan Body->Raw->JSON)
        const category = {id, name}
        this.categoryModel.update(category).then(([data]) => response.send(data))
    }

    static delete = (request, response) => {
        const id = request.params.id;
        this.categoryModel.delete(id).then(([data]) => response.send(data))

    }
}

module.exports = CategoryController;