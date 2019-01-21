import { ApolloServer, gql } from "apollo-server-express";
import allResolvers from "../resolvers";
import schema from "../schema/index";

const typeDefs = schema;

const resolvers = allResolvers;

const apollo = new ApolloServer({
  resolvers,
  typeDefs,
});

export default apollo;
