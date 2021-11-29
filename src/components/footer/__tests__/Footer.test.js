import React from "react";
import { render } from "@testing-library/react";
import { Footer } from "..";

describe("Footer test", () => {
  test("Footer snapshot", () => {
    const { asFragment } = render(<Footer />);
    expect(asFragment(<Footer />)).toMatchSnapshot();
  });
});
