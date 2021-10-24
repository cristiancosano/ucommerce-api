const Model = require('./Model')

class UserModel extends Model{

    constructor(){
        super();
    }

    getAll(){
        return this.pool.execute(this.queries.User.getAll, []);
    }

    getById(id){
        return this.pool.execute(this.queries.User.getById, [ id ]);
    }

    update(user){
        return this.pool.execute(this.queries.User.update, [user.Name, user.Phone, user.Email, user.Password, user.id]);
    }

    delete(id){
        return this.pool.execute(this.queries.User.delete, [ id ]);
    }
    create(name,phone,email,password){
        return this.pool.execute(this.queries.User.create, [name,phone,email,password])
    }

    checkPassword(email,password)
    {
        return this.pool.execute(this.queries.User.auth, [email,password])
    }

}

module.exports = UserModel;