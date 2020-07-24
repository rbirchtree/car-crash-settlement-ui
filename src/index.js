import React from "react";
import App from "./app/App";
import { hydrate, render } from "react-dom";
import "bootstrap/dist/css/bootstrap.css";

import { Provider } from "react-redux";
import { Store } from "./redux/Store";

const rootElement = document.getElementById("root");
if (rootElement.hasChildNodes()) {
  hydrate(<App />, rootElement);
} else {
  render(
    <Provider store={Store}>
      <App />
    </Provider>,
    rootElement
  );
}
