import React from "react";
import { render } from "@testing-library/react";
import { Header } from "..";

describe("Header test", () => {
  test("Header snapshot", () => {
    const { asFragment } = render(<Header />);
    expect(asFragment(<Header />)).toMatchSnapshot();
  });
});