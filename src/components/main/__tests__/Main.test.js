import React from "react";
import { render } from "@testing-library/react";
import { Main } from "..";

describe("Main test", () => {
  test("Main snapshot", () => {
    const { asFragment } = render(<Main />);
    expect(asFragment()).toMatchSnapshot();
  });
});