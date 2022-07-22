const { gql } = require("apollo-server");
exports.typeDefs = gql`

type Query{
    movies:[Movie!]!
}
type Movie{
    Title: String!
    ReleaseDate: String!
    MajorGenre: String!
    IMDBRating: Float!
    IMDBVotes: Int!
}
`;