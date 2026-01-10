import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  ApolloClient,
  ApolloLink,
  HttpLink,
  InMemoryCache
} from '@apollo/client/core';

import { ApolloProvider } from '@apollo/client/react';

import { GraphQLWsLink } from '@apollo/client/link/subscriptions';
import { getMainDefinition } from '@apollo/client/utilities';
import { createClient } from 'graphql-ws';

import { AuthProvider } from './context/providers/AuthProvider.jsx';
import { TestConnection } from './App.jsx';

import { RouterProvider } from "react-router/dom";
import { createBrowserRouter } from 'react-router';
import { MapRouters } from './routers/MapRouters.jsx';


const GRAPHQL_ENDPOINT = 'localhost:4000/graphql';
const httpUrl = `http://${GRAPHQL_ENDPOINT}`;
const wsUrl = `ws://${GRAPHQL_ENDPOINT}`;

const authLink = new ApolloLink((operation, forward) => {
  const token = localStorage.getItem('library-react');

  operation.setContext(({ headers = {} }) => ({
    headers: {
      ...headers,
      ...(token && token !== 'null'
        ? { authorization: `Bearer ${token}` }
        : {}),
    },
  }));

  return forward(operation);
});

const wsLink = new GraphQLWsLink(
  createClient({
    url: wsUrl,
    connectionParams: () => {
      const token = localStorage.getItem('library-react');
      return token && token !== 'null'
        ? { authorization: `Bearer ${token}` }
        : {};
    },
    on: {
      connected: () => console.log('🟢 WS conectado'),
      closed: () => console.log('🔴 WS cerrado'),
      error: (err) => console.error('❌ WS error', err),
    },
  })
);

const httpLink = new HttpLink({ uri: httpUrl });

const splitLink = ApolloLink.split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === 'OperationDefinition' &&
      definition.operation === 'subscription'
    );
  },
  wsLink,
  authLink.concat(httpLink)
);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: splitLink,
});

const router = createBrowserRouter(MapRouters);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ApolloProvider client={client}>
      <AuthProvider>
        <RouterProvider router={router} />
        {/* <TestConnection/> */}
      </AuthProvider>
    </ApolloProvider>
  </StrictMode>,
)
