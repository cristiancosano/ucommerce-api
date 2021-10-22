const DatabaseService = require('../services/DatabaseService');
const queries = require('../common/queries.json')

class Model {

    constructor(){
        const databaseService = new DatabaseService();
        this.pool = databaseService.getPool();
        this.queries = queries;
    }

}

module.exports = Model;