import express from 'express';
import { ApolloServer, gql } from 'apollo-server-express';
import './config/dbConfig'
import resolvers from './gql/resolvers';
import typeDefs from './gql/schemas';

const app = express();

let apolloServer = null
async function startServer() {
    apolloServer = new ApolloServer({
        typeDefs,
        resolvers
    });
    await apolloServer.start();
    apolloServer.applyMiddleware({ app });
}
startServer();

app.listen(8084, () =>
  console.log(`Server ready at http://localhost:8084${apolloServer.graphqlPath}`)
);