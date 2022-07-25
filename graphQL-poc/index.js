const axios = require("axios");
const { ApolloServer } = require("apollo-server");

const { typeDefs } = require("./schema");
const { Query } = require("./resolver/Query");

const server = new ApolloServer({
  typeDefs,
  resolvers: {
      Query,
  },
});

server.listen().then(({ url }) => {
  console.log("Server is ready at port " + url);
});