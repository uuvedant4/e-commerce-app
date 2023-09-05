const { categories } = require("../db");
Product = {
  category: (parent, args, context) => {
    const categoryId = parent.categoryId;
    return categories.find((category) => category.id === categoryId);
  },
};

module.exports = Product;
