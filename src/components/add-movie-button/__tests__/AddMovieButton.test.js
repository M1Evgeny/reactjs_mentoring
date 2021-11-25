import React from "react";
import { screen, act, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { AddMovieButton } from "..";
import { ModalProvider } from "../../context/modal-context";


const mockOnClick = jest.fn();

it("Current render", async () => {
  await act(async () => {
    render(
      <ModalProvider>
        <AddMovieButton onClick={mockOnClick} />
      </ModalProvider>
    );
  });
  expect(document.body).toMatchSnapshot();
});

it("Button click", async () => {
  await act(async () => {
    render(
      <ModalProvider>
        <AddMovieButton onClick={mockOnClick} />
      </ModalProvider>
    );
  });
  const addButton = screen.getByText("+ add movie");
  expect(addButton).toBeInTheDocument();

  userEvent.click(addButton);
});
