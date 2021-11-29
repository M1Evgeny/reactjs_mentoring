import React from "react";
import { render } from "@testing-library/react";
import { Nav } from "..";

describe("Nav test", () => {
  test("Nav snapshot", () => {
    const { asFragment } = render(<Nav />);
    expect(asFragment()).toMatchSnapshot();
  });
});