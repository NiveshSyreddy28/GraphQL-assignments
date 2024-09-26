const { gql } = require("apollo-server");

exports.typeDefs = gql`
  type Query {
    getIncomingResponse(id: ID!): IncomingResponse
  }
  type IncomingResponse {
    login: String
    html_url: String
    name: String
    company: String
    location: String
  }
`;