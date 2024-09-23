import express from "express";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import cors from "cors";
import { gql } from "graphql-tag";
import { PROJECTS } from "./projects.js";

const typeDefs = gql`
  type Project {
    id: ID!
    name: String!
    description: String!
  }

  type Query {
    projects: [Project]
  }
`;

const resolvers = {
  Query: {
    projects: () => PROJECTS,
  },
};

async function startApolloServer() {
  const app = express();
  const server = new ApolloServer({ typeDefs, resolvers });

  app.use(cors());
  app.use(express.json());

  await server.start();
  app.use("/graphql", expressMiddleware(server));

  app.listen(4000, () => {
    console.log("Server is running on http://localhost:4000/graphql");
  });
}

startApolloServer();
