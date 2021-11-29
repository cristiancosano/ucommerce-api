const UserModel = require('../models/UserModel');
const TokenService = require('../services/TokenService');
const bcrypt = require('bcrypt')

class UserController{

    static #bcryptSaltRounds = 10;

    static userModel = new UserModel();

    static index = (request, response) => {
        this.userModel.getAll().then(([data]) => response.send(data));
    }

    static create = async (request, response) =>{
        const name = request.body.name || null;
        const phone = request.body.phone || null;
        const email = request.body.email;
        const password = await bcrypt.hash(request.body.password, this.#bcryptSaltRounds);
        if(email && password)
            this.userModel.create(name, phone, email, password).then(([data]) => response.send(data));
        else
            response.status(400).send({message: 'You must introduce valid email and password'})
    }

    static read = (request, response) =>{
        const id = request.params.id;
        this.userModel.getById(id).then(([data]) => (data.length > 0) ? response.send(data[0]) : response.status(404).send('User not found'));

    }

    static update = async (request, response)=>{
        const id = request.params.id;
        
        const name = request.body.name;
        const phone = request.body.phone;
        const email = request.body.email;
        const currentPassword = request.token.password; //Contraseña actual cifrada
        let password = '';
        
        if( currentPassword == request.body.password){
            password = request.body.password
        }
        else{
         password = await bcrypt.hash(request.body.password, this.#bcryptSaltRounds);
        }

        const user = { id, name, phone, email, password }
        this.userModel.update(user).then(([data]) => response.send(data))

    }

    static delete = (request, response) => {
        const id = request.params.id;
        this.userModel.delete(id).then(([data]) => response.send(data));

    }

    static checkPassword = async (request, response) => {
        const email = request.body.email;
        const password = request.body.password;
        this.userModel.getByEmail(email).then(([data]) => {
            if(data.length > 0){
                bcrypt.compare(password, data[0].password).then(result => {
                    if(result)
                        response.send({token: TokenService.buildToken(data[0]), status: 'ok'});
                    else
                        response.status(400).send({token: null, status:'Invalid authentication'})
                });
            }
            else
                response.status(400).send({token: null, status:'Invalid authentication'})

        });
    }

   static getShoppingHistory = async (request, response) => {
       const id = request.params.id;
       this.userModel.getShoppingHistory(id).then((data) => response.send(data));
    }
}

module.exports = UserController;