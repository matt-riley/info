import { ApolloServer, gql } from "apollo-server-express";

const typeDefs = gql`
  type Query {
    "A simple type for getting started!"
    hello: String
  }
`;

const resolvers = {
  Query: {
    hello: () => "world",
  },
};

const apollo = new ApolloServer({
  resolvers,
  typeDefs,
});

export default apollo;
