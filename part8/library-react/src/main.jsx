import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { MapRouters } from './routers/MapRouters.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import { ApolloClient, gql, HttpLink, InMemoryCache } from '@apollo/client'
import { SetContextLink } from '@apollo/client/link/context'

const authLink  = new SetContextLink(({ headers }) => {
  const token = localStorage.getItem('library-react')
  const myHeaders = {
    ...headers
  }

  if(token && token != 'null'){
    myHeaders['authorization'] = `Bearer ${token}`
  }

  return {
    headers:myHeaders
  }
})

const httpLink = new HttpLink({ uri: 'http://localhost:4000' })

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: authLink.concat(httpLink)
})

import { RouterProvider } from "react-router/dom";
import { createBrowserRouter } from 'react-router';
import { ApolloProvider } from '@apollo/client/react';
import { AuthProvider } from './context/providers/AuthProvider.jsx';

const router = createBrowserRouter(MapRouters);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ApolloProvider client={client}>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </ApolloProvider>
  </StrictMode>,
)
