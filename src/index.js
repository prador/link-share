import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider as UrqlProvider } from "urql";
import { Auth0Provider } from "./utils/Auth0";
import client from "./utils/urqlClient";
import "./index.css";
import {
  OAUTH_AUDIENCE,
  OAUTH_CLIENT_ID,
  OAUTH_DOMAIN,
  OAUTH_REDIRECT_URL
} from "./constants";
import Routes from "./Routes";
import * as serviceWorker from "./serviceWorker";

render(
  <React.StrictMode>
    <Router>
      <Auth0Provider
        domain={OAUTH_DOMAIN}
        client_id={OAUTH_CLIENT_ID}
        audience={OAUTH_AUDIENCE}
        redirect_uri={OAUTH_REDIRECT_URL}
      >
        <UrqlProvider value={client}>
          <Routes />
        </UrqlProvider>
      </Auth0Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
