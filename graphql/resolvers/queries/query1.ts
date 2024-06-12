import { ApolloServer } from "@apollo/server";
import typeDefs from "../../schemas/schema";
const resolvers = {
  Query: {},
};
const server = new ApolloServer({
  typeDefs,
  resolvers,
})

const createHandler = export default server.createHandler({ path: "/api/graphql" });
