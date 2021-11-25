import React from "react";
import { render } from "@testing-library/react";
import { MovieList } from "..";
import stubs from "../../movie-list-container/mockedMovies.json";
import { ModalProvider } from "../../context/modal-context";

describe("MovieList test", () => {
  test("MovieList snapshot", () => {
    const { asFragment } = render(
      <ModalProvider>
        <MovieList movies={stubs} />
      </ModalProvider>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
