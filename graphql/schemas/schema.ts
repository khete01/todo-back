import { gql } from "graphql-tag";

const typeDefs = gql`
  enum TodoStatus {
    PENDING
    DONE
  }

  type Todo {
    _id: ID!
    title: String!
    status: TodoStatus!
  }

  type Query {
    getTodos: [Todo!]!
    getTodo(id: ID!): Todo
  }

  type Mutation {
    createItem(title: String!, status: TodoStatus!): Todo!
    deleteItem(id: ID!): Boolean
    updateItem(id: ID!, title: String, status: TodoStatus): Todo
  }
`;

export default typeDefs;
