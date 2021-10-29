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

    },
    "read":{

    },
    "update":{

    },
    "delete":{

    }
};

const Discount = {
    "create":{

    },
    "read":{

    },
    "update":{

    },
    "delete":{

    }
}

const Category = {
    "create":{

    },
    "read":{

    },
    "update":{

    },
    "delete":{

    }
}

module.exports = {User, Product, Order, Discount, Category}