import React, { Component } from "react";
import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { StripeProvider } from "react-stripe-elements";
import TakeMoney from "./components/Donate/TakeMoney";
import store from "./store";

import "./App.css";
import routes from "./routes";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        {/* <StripeProvider apiKey="pk_test_wpTGYfkOhU8Nv7gFXsliCVW8">
          <TakeMoney />
        </StripeProvider> */}
        <HashRouter>
          <div className="App">{routes}</div>
        </HashRouter>
      </Provider>
    );
  }
}

export default App;
