import React from "react";
import { render, screen } from "@testing-library/react";
import { EmptyComponent } from "..";

describe("EmptyComponent test", () => {
  it("EmptyComponent present", () => {
    render(<EmptyComponent />);

    expect(screen.getByText("No movies found")).toBeInTheDocument();
  });
});
