const { ApolloServer, gql } = require("apollo-server");
const { db} = require("./db");
const {typeDefs} = require("./schema");
const{Query} = require("./Resolvers/Query");

const server = new ApolloServer({
    typeDefs,
    resolvers:{
        Query,
    },
    context:{
        db
    }
});

server.listen().then(({url}) => {
    console.log("Server is ready at " + url);
});