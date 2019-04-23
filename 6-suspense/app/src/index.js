import "normalize.css/normalize.css";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo-hooks";

const client = new ApolloClient({
  uri: "https://www.graphqlhub.com/graphql"
});

ReactDOM.render(
  <React.unstable_ConcurrentMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.unstable_ConcurrentMode>,
  document.getElementById("root")
);
