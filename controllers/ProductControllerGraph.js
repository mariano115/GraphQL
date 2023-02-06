const ProductService = require("../service/ProductsService");

module.exports = ProductController = {
   async getProducts () {
    return await ProductService.getProducts()
  },
  
   async getProductById ({ id }) {
    return await ProductService.getProductById(id)
  },
  
   async addProduct ({description, price, category, photo}) {
    return await ProductService.addProduct({description, price, category, photo})
  },
  
   async deleteProductById ({id}) {
    return await ProductService.deleteProductById(id)
  },
  
   async updateProductById ({id, description, price, category, photo}) {
    return await ProductService.updateProductById(id, {description, price, category, photo})
  }
};
