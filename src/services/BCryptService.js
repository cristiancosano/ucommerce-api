const bcrypt = require('bcrypt');

class BCryptService{
    static encrypt = (password) => {
        return bcrypt.hashSync(password, 10);
    }
}

module.exports = BCryptService