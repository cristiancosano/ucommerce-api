const UserModel = require('../models/UserModel');
const TokenService = require('../services/TokenService');

class UserController{

    static  userModel = new UserModel();
    static index = (request, response) => {
        this.userModel.getAll().then(([data]) => response.send(data));

    }

    static create = (request, response) =>{
        let Name = null;

        if(request.body.name != undefined){
            Name = request.body.name; 
               } 

        let Phone = null;

        if(request.body.phone != undefined){
            Phone = request.body.phone; 
               } 

        const Email = request.body.email;
        const Password = request.body.password;
        this.userModel.create(Name, Phone, Email, Password).then(([data]) => response.send(data));
    }

    static read = (request, response) =>{
        const id = request.params.id;
        this.userModel.getById(id).then(([data]) => response.send(data[0]));

    }

    static update = (request, response) => {
        const id = request.params.id;  //Usas params para obtener los parametros de la url (en CategoryRouter es :id)
        let Name = null;

        if(request.body.name != undefined){
            Name = request.body.name; 
               } 

        let Phone = null;

        if(request.body.phone != undefined){
            Phone = request.body.phone; 
               } 

        const Email = request.body.email;
        const Password = request.body.password;
        const user = {Name,Phone,Email,Password,id}
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