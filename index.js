const { ApolloServer } = require("apollo-server");
const typeDefs = require("./schema");
const Query = require("./resolvers/Query");
const Category = require("./resolvers/Category");
const Product = require("./resolvers/Product");
const { products, categories, reviews } = require("./db");
const Mutation = require("./resolvers/Mutation");

const server = new ApolloServer({
  typeDefs,
  resolvers: {
    Query,
    Category,
    Product,
    Mutation,
  },
  context: {
    categories,
    products,
    reviews,
  },
});

server.listen().then(({ url }) => console.log(`Server running at ${url}`));

// 06:18
