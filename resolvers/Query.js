Query = {
  products: (parent, args, { products }) => {
    return products;
  },
  product: (parent, args, { products }) => {
    const { id: productId } = args;
    const product = products.find((product) => product.id === productId);
    return product ? product : null;
  },
  categories: (parent, args, { categories }) => {
    return categories;
  },
  category: (parent, args, { categories }) => {
    const { id: categoryId } = args;
    const category = categories.find((category) => category.id === categoryId);
    return category ? category : null;
  },
};

module.exports = Query;
