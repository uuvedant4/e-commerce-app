const { v4: uuid } = require("uuid");

Mutation = {
  addCategory: (parent, { input }, { categories }) => {
    const { name } = input;
    const newCategory = {
      id: uuid(),
      name,
    };
    categories.push(newCategory);
    return newCategory;
  },
  addProduct: (parent, { input }, { products }) => {
    const { description, name, image, price, onSale, quantity, categoryId } =
      input;
    const newProduct = {
      id: uuid(),
      name,
      image,
      price,
      onSale,
      quantity,
      categoryId,
      description,
    };
    products.push(newProduct);
    return newProduct;
  },
  addReview: (parent, { input }, { reviews }) => {
    const { date, title, comment, rating, productId } = input;
    const newReview = {
      id: uuid(),
      date,
      title,
      comment,
      rating,
      productId,
    };
    reviews.push(newReview);
    return newReview;
  },
};

module.exports = Mutation;
