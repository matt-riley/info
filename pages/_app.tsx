import React from 'react';
import App from 'next/app';
import { ApolloProvider } from '@apollo/react-hooks';

import withData from '../lib/client';
import ApolloClient from 'apollo-client';

interface Props {
  apollo: ApolloClient<{}>;
}

class MusicApp extends App<Props> {
  render() {
    const { Component, pageProps, apollo } = this.props;
    return (
      <ApolloProvider client={apollo}>
        <Component {...pageProps} />
      </ApolloProvider>
    )
  }
}

export default withData(MusicApp);