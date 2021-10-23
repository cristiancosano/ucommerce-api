const UserModel = require('../models/UserModel');
const BCryptService = require('../services/BCryptService');
const TokenService = require('../services/TokenService');
const bcrypt = require('bcrypt')

class UserController{

    static  userModel = new UserModel();
    static index = (request, response) => {
        this.userModel.getAll().then(([data]) => response.send(data));
    }

    static create = (request, response) =>{
        const name = request.body.name || null;
        const phone = request.body.phone || null;
        const email = request.body.email;
        const password = BCryptService.encrypt(request.body.password);
        console.log(email, request.body.password, password)
        if(email && password)
            this.userModel.create(name, phone, email, password).then(([data]) => response.send(data));
        else
            response.status(400).send({message: 'You must introduce valid email and password'})
    }

    static read = (request, response) =>{
        const id = request.params.id;
        this.userModel.getById(id).then(([data]) => response.send(data[0]));

    }

    static update = (request, response)=>{
        const id = request.params.id;
        
        const name = request.body.name || null;
        const phone = request.body.phone || null;
        const email = request.body.email;
        const password = BCryptService.encrypt(request.body.password);

        const user = { id, name, phone, email, password }
        this.userModel.update(user).then(([data]) => response.send(data))

    }

    static delete = (request, response) => {
        const id = request.params.id;
        this.userModel.delete(id).then(([data]) => response.send(data));

    }
    static checkPassword = (request, response) => {
        const email = request.body.email;
        const password = BCryptService.encrypt(request.body.password);
        this.userModel.getByEmail(email).then(([data]) => {
            console.log(bcrypt.compareSync(password, data[0].Password))
        });

        
        this.userModel.checkPassword(email, password).then(([data]) => {
            if(data.length > 0){
                response.send({token: TokenService.buildToken(data[0]), status: 'ok'});
            }
            else{
                response.status(400).send({token: null, status:'Invalid authentication'})
            }
        });

    }
}

module.exports = UserController;