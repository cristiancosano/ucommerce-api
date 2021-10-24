const jwt = require('jsonwebtoken')

class TokenService{

    static #secret = process.env.SECRET_KEY;

    static buildToken = data => jwt.sign(JSON.stringify(data), this.#secret);
    static checkToken = token => jwt.verify(token, this.#secret, (error, data) => (!error) ? data : undefined)
    
}

module.exports = TokenService;