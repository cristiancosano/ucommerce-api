const UserModel = require('../models/UserModel')

class UserController{

    static  userModel = new UserModel();
    static index = (request, response) =>{
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

        const Email = request.body.Email;
        const Password = request.body.Password;
        this.userModel.create(Name, Phone, Email, Password).then(([data]) => response.send(data));
    }

    static read = (request, response) =>{
        const id = request.params.id;
        this.userModel.getById(id).then(([data]) => response.send(data));

    }

    static update = (request, response)=>{
        const id = request.params.id;  //Usas params para obtener los parametros de la url (en CategoryRouter es :id)
        let Name = null;

        if(request.body.name != undefined){
            Name = request.body.name; 
               } 

        let Phone = null;

        if(request.body.phone != undefined){
            Phone = request.body.phone; 
               } 

        const Email = request.body.Email;
        const Password = request.body.Password;
        const user = {id,Name,Phone,Email,Password}
        this.userModel.update(user).then(([data]) => response.send(data))

    }

    static delete = (request, response)=>{
        const id = request.params.id;
        this.userModel.delete(id).then(([data]) => response.send(data));

    }
    static checkPassword = (request, response)=>{
        const Email = request.body.Email;
        const Password = request.body.Password;
        this.userModel.checkPassword(Email,Password).then(([data]) => response.send(data));

    }
}

module.exports = UserController;