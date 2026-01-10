import { createServer } from 'http';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';
import { makeExecutableSchema } from '@graphql-tools/schema';
import { WebSocketServer } from 'ws';
import { useServer } from 'graphql-ws/use/ws';
import express from 'express';
import cors from 'cors';
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';

import { UserContextMiddlewareWS, UserContextMiddleware } from './middlewares/UserContextMiddleware.js';
import { IndexDef } from './graphql/schema/index.js';
import { GenereateResolvers } from './graphql/resolvers/index.js';
import { UserModel } from './models/mongodb/User.js';
import { BookModel } from './models/mongodb/Book.js';
import { AuthorModel } from './models/mongodb/Author.js';
import { EventEmitter } from 'events';

export const ee = new EventEmitter();

const models = {
  UserModel,
  BookModel,
  AuthorModel,
}

const app = express()
const httpServer = createServer(app);

const schema = makeExecutableSchema({ typeDefs:IndexDef, resolvers:GenereateResolvers(models) });

const wsServer = new WebSocketServer({

  server: httpServer,
  path: '/graphql',

});

const serverCleanup = useServer({ schema }, wsServer)


const server = new ApolloServer({
  schema,
  context: UserContextMiddleware({UserModel}),
  introspection: true,
  playground:true,
  plugins: [
    ApolloServerPluginDrainHttpServer({ httpServer }),
    {
      async serverWillStart() {
        return {
          async drainServer() {
            await serverCleanup.dispose();
          },
        };
      },
    },
  ],
});

async function startServer() {
  await server.start();

  app.use(
    '/graphql',
    cors(),
    express.json(),
    expressMiddleware(server, {
      context: UserContextMiddleware({ UserModel })
    })
  );
  
  const PORT = process.env.PORT || 4000;
  
  await new Promise((resolve) => httpServer.listen(PORT, resolve));
  
  console.log(`🚀 Server ready at http://localhost:${PORT}`);
  console.log(`🚀 Subscriptions ready at ws://localhost:${PORT}`);
  
  return { server, app, httpServer };
}

process.on('SIGINT', async () => {
  console.log('Apagando servidor...');
  await serverCleanup.dispose();
  httpServer.close();
  process.exit(0);
});

startServer().catch((err) => {
  console.error('Error al iniciar el servidor:', err);
  process.exit(1);
});