import React from "react";
import { screen, act, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Router } from "react-router-dom";
import { MovieCard } from "..";
import stubs from "../../movie-list-container/mockedMovies.json";
import { ModalProvider } from "../../context/modal-context";
import { createMemoryHistory } from "history";

const mockOnClick = jest.fn();

it("Current render", async () => {
  const history = createMemoryHistory();
  await act(async () => {
    render(
      <Router history={history}>
        <ModalProvider>
          <MovieCard
            id={stubs[0].id}
            title={stubs[0].title}
            genres={stubs[0].genres}
            thumbnail={stubs[0].poster_path}
            releaseDate={stubs[0].release_date}
            onClick={mockOnClick}
          />
        </ModalProvider>
      </Router>
    );
  });
  expect(document.body).toMatchSnapshot();
});

it("Current render", async () => {
  const history = createMemoryHistory();
  await act(async () => {
    render(
      <Router history={history}>
        <ModalProvider>
          <MovieCard
            id={stubs[0].id}
            title={stubs[0].title}
            genres={stubs[0].genres}
            thumbnail={stubs[0].poster_path}
            releaseDate={stubs[0].release_date}
            onClick={mockOnClick}
          />
        </ModalProvider>
      </Router>
    );
  });

  const title = screen.getByText(stubs[0].title);
  expect(title).toBeInTheDocument();

  userEvent.click(title);
  expect(history.length).toBe(2);
});

it("handle edit modal open render", async () => {
  const history = createMemoryHistory();
  await act(async () => {
    render(
      <Router history={history}>
        <ModalProvider>
          <MovieCard
            id={stubs[0].id}
            title={stubs[0].title}
            genres={stubs[0].genres}
            thumbnail={stubs[0].poster_path}
            releaseDate={stubs[0].release_date}
            onClick={mockOnClick}
          />
        </ModalProvider>
      </Router>
    );
  });

  const editButton = screen.getByText("Edit");
  expect(editButton).toBeInTheDocument();

  userEvent.click(editButton);
  //screen.debug();
  // const editModal = screen.getByText('EDIT MOVIE');
  // expect(editModal).toBeInTheDocument();
});

it("handle delete modal open render", async () => {
    const history = createMemoryHistory();
    await act(async () => {
      render(
        <Router history={history}>
          <ModalProvider>
            <MovieCard
              id={stubs[0].id}
              title={stubs[0].title}
              genres={stubs[0].genres}
              thumbnail={stubs[0].poster_path}
              releaseDate={stubs[0].release_date}
              onClick={mockOnClick}
            />
          </ModalProvider>
        </Router>
      );
    });
  
    const deleteButton = screen.getByText("Delete");
    expect(deleteButton).toBeInTheDocument();
  
    userEvent.click(deleteButton);
  });
  
