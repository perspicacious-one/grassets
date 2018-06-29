import React from 'react';
import { Route, Router } from 'react-router-dom';
import App from './App';
import { ApolloProvider } from 'react-apollo'
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import Callback from './components/Callback/Callback';
import Auth from './components/Auth/Auth';
import history from './history';

const auth = new Auth();

const handleAuthentication = ({location}) => {
  if (/access_token|id_token|error/.test(location.hash)) {
    auth.handleAuthentication();
  }
}

export const makeMainRoutes = () => {
	const client = new ApolloClient({
		dataIdFromObject: o => o.id,
		link: new HttpLink({ uri: process.env.REACT_APP_GRAPHCMS_API }),
		cache: new InMemoryCache(),
	})
  return (
		<ApolloProvider client={client}>
      <Router history={history}>
        <div>
          <Route path="/" render={(props) => <App auth={auth} {...props} />} />
          <Route path="/callback" render={(props) => {
            handleAuthentication(props);
            return <Callback {...props} /> 
          }}/>
        </div>
      </Router>
		</ApolloProvider>

  );
}