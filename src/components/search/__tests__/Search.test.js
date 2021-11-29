import React from "react";
import { render, act, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Search } from "..";
import { MemoryRouter, Router } from "react-router-dom";
import configureStore from "redux-mock-store";
import { mount } from "enzyme";
import { createMemoryHistory } from "history";

const mockHistoryReplace = jest.fn();
const searchValue = "test";
const nextSearchValue = "some film name";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useHistory: () => ({
    replace: mockHistoryReplace,
  }),
  useParams: () => ({
    searchQuery: searchValue,
  }),
}));

const initialState = {};
const mockStore = configureStore();
let store;

beforeEach(() => {
  store = mockStore(initialState);
});

afterEach(() => {
  jest.clearAllMocks();
});

it("Search input value is changed", async () => {
  await act(async () => {
    render(
      <MemoryRouter
        initialentries={[
          {
            pathname: "/search",
          },
        ]}
      >
        <Search store={store} />
      </MemoryRouter>
    );
  });

  const input = screen.getByPlaceholderText("What do you want to watch?");
  async () => {
    await wait(() => {
      userEvent.clear(input);
      userEvent.type(input, searchValue);
      expect(input).toHaveValue(searchValue);
    });
  };
});

it("Search form call history replace with value when send", async () => {
  await act(async () => {
    render(
      <MemoryRouter initialentries={[{ pathname: `/search` }]}>
        <Search store={store} />
      </MemoryRouter>
    );
  });

  const input = screen.getByPlaceholderText("What do you want to watch?");
  const button = screen.getByRole("button");

  async () => {
    userEvent.clear(input);
    userEvent.type(input, nextSearchValue);
    userEvent.click(button);

    expect(mockHistoryReplace).toBeCalledTimes(1);
  };
});

it("Search form call history replace with empty value when send", async () => {
  await act(async () => {
    render(
      <MemoryRouter initialentries={[{ pathname: `/search` }]}>
        <Search store={store} />
      </MemoryRouter>
    );
  });

  const input = screen.getByPlaceholderText("What do you want to watch?");
  const button = screen.getByRole("button");
  async () => {
    userEvent.clear(input);
    userEvent.click(button);

    expect(mockHistoryReplace).toBeCalledTimes(1);
  };
});

it("Check location pathname after entering value", async () => {
  const history = createMemoryHistory();
  await act(async () => {
    render(
      <Router history={history}>
        <Search store={store} />
      </Router>
    );
  });

  const input = screen.getByPlaceholderText("What do you want to watch?");
  const button = screen.getByRole("button");

  async () => {
    userEvent.clear(input);
    userEvent.type(input, searchValue);
    userEvent.click(button);
    
    expect(history.length).toBe(2);
    expect(history.location.pathname).toBe('/search/test');
  };
});

describe("FilmForm", () => {
  test("when all fields are empty then errors is displayed", async () => {
    const form = mount(
      <MemoryRouter initialentries={[{ pathname: `/search` }]}>
        <Search store={store} />
      </MemoryRouter>
    );
    async () => {
      form.find("form").simulate("submit", { preventDefault: () => {} });
      form.update();

      expect(form.html()).toMatchSnapshot();
    };
  });
});
