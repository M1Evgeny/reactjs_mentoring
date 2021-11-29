import React from "react";
import { render } from "@testing-library/react";
import { Container } from "..";

describe("Container test", () => {
  test("Container snapshot", () => {
    const { asFragment } = render(<Container />);
    expect(asFragment()).toMatchSnapshot();
  });
});
