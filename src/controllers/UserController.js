const UserModel = require('../models/UserModel');
const TokenService = require('../services/TokenService');

class UserController{

    static  userModel = new UserModel();
    static index = (request, response) => {
        this.userModel.getAll().then(([data]) => response.send(data));

    }

    static create = (request, response) => {
        const name = request.body.name; 
        const phone = request.body.phone;
        const email = request.body.email;
        const password = request.body.password;
        this.userModel.create(name, phone, email, password).then(([data]) => response.send(data));
    }

    static read = (request, response) => {
        const id = request.params.id;
        this.userModel.getById(id).then(([data]) => response.send(data[0]));

    }

    static update = (request, response) => {
        const id = request.params.id;  //Usas params para obtener los parametros de la url (en CategoryRouter es :id)
        const name = request.body.name; //Usas body para obtener los parametros de la petición (en PostMan Body->Raw->JSON)
        const phone = request.body.phone;
        const email = request.body.email;
        const password = request.body.password;
        const user = {id,name, phone, email, password}
        this.userModel.update(user).then(([data]) => response.send(data))

    }

    static delete = (request, response) => {
        const id = request.params.id;
        this.userModel.delete(id).then(([data]) => response.send(data));

    }
    static checkPassword = (request, response) => {
        const email = request.body.email;
        const password = request.body.password;
        this.userModel.checkPassword(email, password).then(([data]) => {
            if(data.length > 0){
                response.send({token: TokenService.buildToken(data[0]), status: 'ok'});
            }
            else{
                response.status(404).send({token: null, status:'Invalid authentication'})
            }
        });

    }
}

module.exports = UserController;