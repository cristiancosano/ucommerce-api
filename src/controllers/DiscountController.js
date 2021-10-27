const DiscountModel = require('../models/DiscountModel')

class DiscountController{

    static  discountModel = new DiscountModel();
    static index = (request, response) => {
        this.discountModel.getAll().then(([data]) => response.send(data));
    }

    static create = (request, response) => {
        const rebaja = request.body.rebaja;
        this.discountModel.create(rebaja).then(([data]) => response.send(data));
    }

    static read = (request, response) =>{
        const id = request.params.id;
        this.discountModel.getById(id).then(([data]) => (data.length > 0) ? response.send(data[0]) : response.status(404).send('Discount not found'));
    }

    static update = (request, response) => {
        const id = request.params.id;  //Usas params para obtener los parametros de la url (en CategoryRouter es :id)
        const rebaja = request.body.rebaja; //Usas body para obtener los parametros de la petición (en PostMan Body->Raw->JSON)
        const discount = {id, rebaja}
        this.discountModel.update(discount).then(([data]) => response.send(data))
    }

    static delete = (request, response) => {
        const id = request.params.id;
        this.discountModel.delete(id).then(([data]) => response.send(data))

    }
}

module.exports = DiscountController;