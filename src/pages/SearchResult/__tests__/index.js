import { Provider } from "react-redux";
import { render, screen, fireEvent } from "@testing-library/react";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";

import SearchResult from "../";
import store from "../../../store";

describe("Search Movie", () => {
  test("should show 'Movie Not Found' message", () => {
    const history = createMemoryHistory();
    history.push("/");
    render(
      <Provider store={store}>
        <Router history={history}>
          <SearchResult />
        </Router>
      </Provider>
    );
    const text = screen.getByText("Movie Not Found");
    expect(text).toBeInTheDocument();
  });
});
