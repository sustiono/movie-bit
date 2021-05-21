import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "../store";

import Routes from "../router";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <Provider store={store}>
      <Routes />
    </Provider>,
    div
  );
});
