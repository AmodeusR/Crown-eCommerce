import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { store } from "./store/store";

import { CartProvider } from "./contexts/cart.context";

import "./styles/main.scss";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <CartProvider>
        <Router>
          <App />
        </Router>
      </CartProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
