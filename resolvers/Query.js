Query = {
  products: (parent, { filter }, { db }) => {
    let filteredProducts = db.products;
    if (filter) {
      if (filter.onSale === true) {
        filteredProducts = filteredProducts.filter(
          (product) => product.onSale === true
        );
      }
      if ([1, 2, 3, 4, 5].includes(filter.avgRating)) {
        filteredProducts = filteredProducts.filter((product) => {
          let sumRating = 0;
          let numberOfReviews = 0;
          db.reviews.forEach((review) => {
            if (review.productId === product.id) {
              sumRating += review.rating;
              ++numberOfReviews;
            }
          });
          const avgProductRating = sumRating / numberOfReviews;
          return avgProductRating >= filter.avgRating;
        });
      }
    }
    return filteredProducts;
  },
  product: (parent, args, { db }) => {
    const { id: productId } = args;
    const product = db.products.find((product) => product.id === productId);
    return product ? product : null;
  },
  categories: (parent, args, { db }) => {
    return db.categories;
  },
  category: (parent, args, { db }) => {
    const { id: categoryId } = args;
    const category = db.categories.find(
      (category) => category.id === categoryId
    );
    return category ? category : null;
  },
};

module.exports = Query;
