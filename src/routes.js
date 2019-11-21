import React from 'react';
import { Route, Router } from 'react-router-dom';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import LogRocket from 'logrocket';
import history from './history';
import App from './App';

LogRocket.init('itb7ok/dsi-assets');

export const makeMainRoutes = () => {
  const client = new ApolloClient({
    connectToDevTools: true,
    link: new HttpLink({ uri: process.env.REACT_APP_GRAPHCMS_API }),
    cache: new InMemoryCache({
      dataIdFromObject: o => o.id,
    }),
  });
  return (
    <ApolloProvider client={client}>
      <Router history={history}>
        <div>
          <Route path="/" render={props => <App {...props} />} />
        </div>
      </Router>
    </ApolloProvider>

  );
};
