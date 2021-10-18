const DatabaseService = require('../services/DatabaseService');

class Model {

    constructor(){
        const databaseService = new DatabaseService();
        this.pool = databaseService.getPool();
    }

}

module.exports = Model;