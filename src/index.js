import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloProvider } from 'react-apollo'
import { makeMainRoutes } from './routes';


const routes = makeMainRoutes();

ReactDOM.render(
  routes,
  document.getElementById('root')
);
registerServiceWorker()
	// ReactDOM.render(
	// 	<ApolloProvider client={client}>
	// 		<App auth={auth}/>
	// 	</ApolloProvider>,
	// 	document.getElementById('root')
	// )
	// registerServiceWorker();

