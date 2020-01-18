import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import withApollo from 'next-with-apollo';
import { createHttpLink } from 'apollo-link-http';
import fetch from 'isomorphic-unfetch';

const API_URL = process.env.GQL_URL || 'http://localhost:8080'

const link = createHttpLink({
  fetch,
  uri: API_URL
})

export default withApollo(
  ({ initialState }) => new ApolloClient({
    link,
    cache: new InMemoryCache().restore(initialState || {})
  })
)