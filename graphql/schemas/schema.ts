import { gql } from "graphql-tag";

const typeDefs = gql`
  type Todo {
    _id: ID!
    title: String!
    status: PENDING | DONE
  }

  type Query {
    todos: [Todo!]!
  }
`;
export default typeDefs