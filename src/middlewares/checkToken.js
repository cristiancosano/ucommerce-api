const TokenService = require('../services/TokenService');

const checkToken = (request, response, next) => {
    const token = request.body.token || request.query.token;
    if((request.token = TokenService.checkToken(token))){
        next();
    }
    else{
        response.status(401).send("Unauthorized. You must send a valid token.");;
    }
}

module.exports = checkToken;