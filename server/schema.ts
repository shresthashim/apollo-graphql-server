import { gql } from "graphql-tag";
import { PROJECTS } from "./projects.js";
import { USERS } from "./users.js";
export const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    username: String!
    email: String!
    phone: String!
  }
  type Project {
    id: ID!
    userId: ID!
    name: String!
    description: String!
    user: User
  }

  type Query {
    projects: [Project]
    users: [User]
    getUser(id: ID!): User
  }
`;

export const resolvers = {
  // Resolver for the user field on the Project type
  // One API call and we find projects and users by id (BOTH) in the same call

  Project: {
    user: (project: any) => {
      return USERS.find((user) => user.id === project.userId);
    },
  },

  Query: {
    projects: () => PROJECTS,

    // Resolver for the users query field
    // users: () => USERS,

    // Resolver for the getUser query field that takes an id argument
    // getUser: (parent: any, { id }) => {
    //   return USERS.find((user) => user.id === id);
    // },
  },
};
