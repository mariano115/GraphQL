const { buildSchema } = require("graphql");
const ProductSchema = buildSchema(`
    type Product {
        id: ID!
        description: String,
        price: Int,
        category: String,
        photo: String
    }
    type Result {
      acknowledged: String
      deletedCount: Int
    }
    type Query {
      getProducts: [Product]
      getProductById(id: ID!): Product
    }
    type Mutation {
      addProduct(description: String, price: Int, category: String, photo: String): Product
      updateProductById(id: ID, description: String, price: Int, category: String, photo: String): Product,
      deleteProductById(id: ID!): Result
    }
`);

module.exports = ProductSchema;