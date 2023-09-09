Query = {
  products: (parent, { filter }, { products, reviews }) => {
    let filteredProducts = products;
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
          reviews.forEach((review) => {
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
