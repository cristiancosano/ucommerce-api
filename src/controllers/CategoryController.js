const CategoryModel = require('../models/UserModel')

class CayegoryController{

    static  userModel = new UserModel();
    static index(request, response){

    }

    static create(request, response){

    }

    static read(request, response){
        const id = request.params.id;
        const user = this.userModel.getById(id);

        response.send(user);
    }

    static update(request, response){
        const id = request.params.id;

    }

    static delete(request, response){
        const id = request.params.id;

    }
}

module.exports = UserController;