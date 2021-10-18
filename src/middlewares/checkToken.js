const jwt = require('jsonwebtoken');

const checkToken = (request, response, next) => {
    let token;
    if(request.body.token != undefined && (token = jwt.verify(request.body.token, process.env.SECRET_KEY))){
        request.token = token;
        next();
    }
    else{
        res.status(401).send("Unauthorized. You must send a valid token.");;
    }
}

module.exports = checkToken;