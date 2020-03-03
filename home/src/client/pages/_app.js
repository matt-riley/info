import App, { Container } from 'next/app';
import React from 'react';
import { DefaultSeo } from 'next-seo';
import { ThemeProvider } from 'theme-ui';
import theme from '@rebass/preset';
import Header from '../components/Header';

export default class InfoApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return(
      <React.Fragment>
        <DefaultSeo />
        <ThemeProvider theme={theme}>
          <Header />
          <Component {...pageProps} />
        </ThemeProvider>
      </React.Fragment>
    )
  }
}