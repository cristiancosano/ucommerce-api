const CartModel = require('../models/CartModel')

class CartController{

    static  cartModel = new CartModel();
    static index = (request, response) => {
        const owner = request.token.customerId;
        this.cartModel.getAll(owner).then(([data]) => response.send(data));
    }

    static create = (request, response) => {
        const owner = request.token.customerId;
        const product = request.body.productId;
        const quantity = request.body.quantity;
        this.cartModel.create(product, owner, quantity).then(([data]) => response.send(data));
    }

    static update = (request, response) => {
        const owner = request.token.customerId;
        const product = request.body.productId;
        const quantity = request.body.quantity;
        this.cartModel.update(quantity, owner, product).then(([data]) => response.send(data))
    }

    static delete = (request, response) => {
        const product = request.body.productId;
        const owner = request.token.customerId;
        this.cartModel.delete(product, owner).then(([data]) => response.send(data))

    }
    static deleteAll = (request, response) => {
        const owner = request.token.customerId;      
        this.cartModel.deleteAll(owner).then(([data]) => response.send(data))

    }
}

module.exports = CartController;