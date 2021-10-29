const formValidations = require('./formValidations.json');
const User = {
    "create": {
        "email": formValidations.User.email,
        "password": formValidations.User.password,
        "phone": formValidations.User.phone,
        "name": formValidations.User.name
    },
    "read":{
        "id": formValidations.User.id
    },
    "update": formValidations.User,
    "delete":{
        "id": formValidations.User.id
    },
    "auth": {
        "email": formValidations.User.email,
        "password": formValidations.User.password
    }
}
const Product = {
    "create":{
        "name": formValidations.Product.name,
        "description": formValidations.Product.description,
        "unitPrice": formValidations.Product.unitPrice,
        "images": formValidations.Product.images,
        "discountId": formValidations.Product.discountId,
        "categoryId": formValidations.Product.categoryId,
    },
    "read":{
        "id": formValidations.Product.id
    },
    "update":{
        "id": formValidations.Product.id,
        "name": formValidations.Product.name,
        "description": formValidations.Product.description,
        "unitPrice": formValidations.Product.unitPrice,
        "images": formValidations.Product.images,
        "discountId": formValidations.Product.discountId,
        "categoryId": formValidations.Product.categoryId,
    },
    "delete":{
        "id": formValidations.Product.id
    },
    "search":{
        "text": formValidations.Product.text
    }
}; 

const Order = {
    "create":{
        "customerId": formValidations.Order.customerId,
        "items": formValidations.Order.items

    },
    "read":{
        "id": formValidations.Order.id

    },
    "update":{
        "id": formValidations.Order.id,
        "customerId": formValidations.Order.customerId,
        "items": formValidations.Order.items

    },
    "delete":{
        "id": formValidations.Order.id

    }
};

const Discount = {
    "create":{
        "rebaja": formValidations.Discount.rebaja
    },
    "read":{
        "id": formValidations.Discount.id
    },
    "update":{
        "id": formValidations.Discount.id,
        "rebaja": formValidations.Discount.rebaja

    },
    "delete":{
        "id": formValidations.Discount.id
    }
}

const Category = {
    "create":{
        "name": formValidations.Category.name

    },
    "read":{
        "id": formValidations.Category.id

    },
    "update":{
        "id": formValidations.Category.id,
        "name": formValidations.Category.name

    },
    "delete":{
        "id": formValidations.Category.id

    }
}

module.exports = {User, Product, Order, Discount, Category}