const { products, categories } = require("../db");

Query = {
  products: () => {
    return products;
  },
  product: (parent, args, context) => {
    const { id: productId } = args;
    const product = products.find((product) => product.id === productId);
    return product ? product : null;
  },
  categories: () => {
    return categories;
  },
  category: (parent, args, context) => {
    const { id: categoryId } = args;
    const category = categories.find((category) => category.id === categoryId);
    return category ? category : null;
  },
};

module.exports = Query;
