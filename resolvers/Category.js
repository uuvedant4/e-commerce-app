Category = {
  products: (parent, { filter }, { db }) => {
    const categoryId = parent.id;
    if (filter) {
      if (filter.onSale) {
        return db.products.filter(
          (product) =>
            product.categoryId === categoryId && product.onSale === true
        );
      }
    }
    return db.products.filter((product) => product.categoryId === categoryId);
  },
};

module.exports = Category;
