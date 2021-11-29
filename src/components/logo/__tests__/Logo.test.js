import React from "react";
import { render } from "@testing-library/react";
import { Logo } from "..";

describe("Logo test", () => {
  test("logo snapshot", () => {
    const { asFragment } = render(<Logo />);
    expect(asFragment(<Logo />)).toMatchSnapshot();
  });
});
