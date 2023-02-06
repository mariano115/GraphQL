Querys GraphQL
http://localhost:9090/productos
REEMPLAZAR LOS ID´S A CONVENIENCIA DE LOS TESTS

GET PRODUCTOS:
{
  getProducts {
    id
    description
    price
    category
    photo
  }
}

GET PRODUCTOS BY ID:
{
  getProductById(id: "63d3e5e8e87d81bc84727f19") {
    id
    description
    price
    category
    photo
  }
}

ADD PRODUCT:
mutation {
  addProduct(description: "balon", price: 12, category: "juguete", photo: "foto juguete") {
    id
    description
    price
    category
    photo
  }
}

UPDATE PRODUCT BY ID:
mutation {
  updateProductById(id: "63e114e9d2c5bdc121894ee2", description: "balonModified") {
    id
    description
  }
}

DELETE PRODUCT BY ID:
mutation {
  deleteProductById(id: "63ceb60f690d04c98d7a1f1d") {
    acknowledged
    deletedCount
  }
}
