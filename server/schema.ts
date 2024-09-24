import { gql } from "graphql-tag";
import { PROJECTS } from "./projects.js";
import { USERS } from "./users.js";
export const typeDefs = gql`
  type Project {
    id: ID!
    userId: ID!
    name: String!
    description: String!
  }

  type User {
    id: ID!
    name: String!
    username: String!
    email: String!
    phone: String!
  }

  type Query {
    projects: [Project]
    users: [User]
    getUser(id: ID!): User
  }
`;

export const resolvers = {
  Query: {
    projects: () => PROJECTS,
    users: () => USERS,
    getUser: (parent: any, { id }) => {
      return USERS.find((user) => user.id === id);
    },
  },
};
