Category = {
  products: (parent, { filter }, { products }) => {
    const categoryId = parent.id;
    if (filter) {
      if (filter.onSale) {
        return products.filter(
          (product) =>
            product.categoryId === categoryId && product.onSale === true
        );
      }
    }
    return products.filter((product) => product.categoryId === categoryId);
  },
};

module.exports = Category;
