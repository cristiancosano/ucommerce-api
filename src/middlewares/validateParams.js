const { validationResult } = require('express-validator')

const validateParams = (request, response, next) => {

    const errors = validationResult(request);

    if (!errors.isEmpty()) {
        response.status(400).json({ errors: errors.array() });
    }
    else{
        next();
    }

}

module.exports = validateParams;
