import { Provider } from "react-redux";
import { render, screen } from "@testing-library/react";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";

import Header from "../";
import store from "../../../store";

describe("Logo and Avatar", () => {
  test('should have text "MOVIEbit"', () => {
    const history = createMemoryHistory();
    history.push("/");
    render(
      <Provider store={store}>
        <Router history={history}>
          <Header />
        </Router>
      </Provider>
    );
    const text = screen.getByText("MOVIEbit");
    expect(text).toBeInTheDocument();
  });

  test("should have user name 'Sustiono'", () => {
    const history = createMemoryHistory();
    history.push("/");
    render(
      <Provider store={store}>
        <Router history={history}>
          <Header />
        </Router>
      </Provider>
    );
    const text = screen.getByText("Sustiono");
    expect(text).toBeInTheDocument();
  });
});

describe("Input Search", () => {
  test("should hide the search input", () => {
    const history = createMemoryHistory();
    history.push("/");
    render(
      <Provider store={store}>
        <Router history={history}>
          <Header />
        </Router>
      </Provider>
    );
    const placeholder = screen.getByTestId("search-input");
    expect(placeholder).toHaveClass("hidden");
  });

  test("should show the search input", () => {
    const history = createMemoryHistory();
    history.push("/search/test");
    render(
      <Provider store={store}>
        <Router history={history}>
          <Header />
        </Router>
      </Provider>
    );
    const placeholder = screen.getByTestId("search-input");
    expect(placeholder).toHaveClass("flex");
  });
});
