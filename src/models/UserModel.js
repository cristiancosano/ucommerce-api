const Model = require('./Model')

class UserModel extends Model{

    constructor(){
        super();
    }

    getAll(){
        return this.pool.execute(this.queries.User.getAll);
    }

    getById(id){
        return this.pool.execute(this.queries.User.getById, [ id ]);
    }

    getByEmail(email){
        return this.pool.execute(this.queries.User.getByEmail, [ email ]);
    }

    update(user){
        return this.pool.execute(this.queries.User.update, [ user.name, user.phone, user.email, user.password, user.id ]);
    }

    delete(id){
        return this.pool.execute(this.queries.User.delete, [ id ]);
    }
    create(name,phone,email,password){
        return this.pool.execute(this.queries.User.create, [ name, phone, email, password ])
    }

    checkPassword(email, password)
    {
        return this.pool.execute(this.queries.User.auth, [ email, password ])
    }

}

module.exports = UserModel;