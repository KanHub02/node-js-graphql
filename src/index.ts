import { ApolloServer } from 'apollo-server';
import { typeDefs } from './schemas';
import { resolvers } from './resolvers';
import { db } from "./models/base";
import { checkDBConnection } from './config';

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(({ url }) => {
    const dbConnectionStatus = checkDBConnection();
    if (dbConnectionStatus){
        console.log(`Server ready at ${url}\nDatabase connection is successful`);
    }
    else {
        console.log(`Server ready at ${url}\nDatabase connection is failed`);
    } // Check DB connection
    
});