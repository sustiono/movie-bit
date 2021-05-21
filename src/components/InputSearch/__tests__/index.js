import { Provider } from "react-redux";
import { render, screen, fireEvent } from "@testing-library/react";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";

import InputSearch from "../";
import store from "../../../store";

const SUGGESTIONS = {
  Search: [
    {
      Title: "Mesut Süre ile iliski testi",
      Year: "2018",
      imdbID: "tt9098706",
      Type: "series",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BYmVmYmU0ZmQtMzc1Ni00ODdkLWI0NWQtMGFjNzM3ZTdiNGFjXkEyXkFqcGdeQXVyNDg4MjkzNDk@._V1_SX300.jpg",
    },
    {
      Title: "Johnny Test",
      Year: "2005–2014",
      imdbID: "tt0454349",
      Type: "series",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BZDVhZWVkNTUtMTE1OC00YmViLWJlMzYtNTQwYmI3MmQ3OGYzXkEyXkFqcGdeQXVyODk1MjAxNzQ@._V1_SX300.jpg",
    },
  ],
};

describe("Search Movie", () => {
  test("should show input search", () => {
    const history = createMemoryHistory();
    history.push("/");
    render(
      <Provider store={store}>
        <Router history={history}>
          <InputSearch
            keyword={""}
            isEmpty={false}
            suggestions={null}
            searchStatus={false}
          />
        </Router>
      </Provider>
    );
    const placeholder = screen.getByPlaceholderText("Type title...");
    expect(placeholder).toBeInTheDocument();
  });

  test("should show seggestion on focus", () => {
    const history = createMemoryHistory();
    history.push("/");
    render(
      <Provider store={store}>
        <Router history={history}>
          <InputSearch
            keyword={"test"}
            isEmpty={false}
            searchStatus={false}
            suggestions={SUGGESTIONS}
          />
        </Router>
      </Provider>
    );
    const input = screen.getByTestId("input-search");
    input.focus();
    const list = screen.queryAllByRole("listitem");
    expect(list).toHaveLength(2);
  });

  test("should show seggestion on blur", () => {
    const history = createMemoryHistory();
    history.push("/");
    render(
      <Provider store={store}>
        <Router history={history}>
          <InputSearch
            keyword={"test"}
            isEmpty={false}
            suggestions={null}
            searchStatus={false}
          />
        </Router>
      </Provider>
    );
    const input = screen.getByTestId("input-search");
    input.focus();
    const suggestions = screen.getByTestId("suggestions");
    fireEvent.click(suggestions);
    const list = screen.queryAllByRole("listitem");
    expect(list).toHaveLength(0);
  });

  test('should hide suggestion component"', () => {
    const history = createMemoryHistory();
    history.push("/");
    render(
      <Provider store={store}>
        <Router history={history}>
          <InputSearch
            keyword={""}
            isEmpty={false}
            suggestions={null}
            searchStatus={false}
          />
        </Router>
      </Provider>
    );
    const suggestion = screen.queryByTestId("suggestions");
    expect(suggestion).toBeNull();
  });

  test('should show loading"', () => {
    const history = createMemoryHistory();
    history.push("/");
    render(
      <Provider store={store}>
        <Router history={history}>
          <InputSearch
            isEmpty={false}
            keyword={"test123"}
            suggestions={null}
            searchStatus={true}
          />
        </Router>
      </Provider>
    );
    const suggestion = screen.queryByTestId("suggestions");
    expect(suggestion).toBeInTheDocument();
    const searchLoading = screen.queryByTestId("search-loading");
    expect(searchLoading).toBeInTheDocument();
  });

  test('should show "Not Found" text', () => {
    const history = createMemoryHistory();
    history.push("/");
    render(
      <Provider store={store}>
        <Router history={history}>
          <InputSearch
            isEmpty={true}
            keyword={"test123"}
            suggestions={null}
            searchStatus={false}
          />
        </Router>
      </Provider>
    );
    const suggestion = screen.queryByTestId("suggestions");
    expect(suggestion).toBeInTheDocument();
    const text = screen.queryByText("Not Found");
    expect(text).toBeInTheDocument();
  });

  test("should show list suggestions", () => {
    const history = createMemoryHistory();
    history.push("/");
    render(
      <Provider store={store}>
        <Router history={history}>
          <InputSearch
            isEmpty={false}
            keyword={"test"}
            searchStatus={false}
            suggestions={SUGGESTIONS}
          />
        </Router>
      </Provider>
    );
    const suggestion = screen.queryByTestId("suggestions");
    expect(suggestion).toBeInTheDocument();
    const list = screen.queryAllByRole("listitem");
    expect(list).toHaveLength(2);
  });
});
