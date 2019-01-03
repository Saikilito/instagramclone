import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';
import * as serviceWorker from './serviceWorker';

import { ApolloProvider } from 'react-apollo';
import ApolloClient from "apollo-boost";

import 'semantic-ui-css/semantic.min.css';
import './css/main.css';
const App = Routes

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql"
});

const Route =   <ApolloProvider client={client}>
                    <App/>  
                </ApolloProvider>

ReactDOM.render(
    Route
    , 
    document.getElementById('root')
);

serviceWorker.unregister();