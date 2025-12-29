import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { MapRouters } from './routers/MapRouters.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import { ApolloClient, gql, HttpLink, InMemoryCache } from '@apollo/client'

const client = new ApolloClient({
  link: new HttpLink({
    uri: 'http://localhost:4000',
  }),
  cache: new InMemoryCache(),
})

import { RouterProvider } from "react-router/dom";
import { createBrowserRouter } from 'react-router';
import { ApolloProvider } from '@apollo/client/react';

const router = createBrowserRouter(MapRouters);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ApolloProvider client={client}>
      <RouterProvider router={router} />
    </ApolloProvider>
  </StrictMode>,
)
