// components/__tests__/Spinner.test.tsx
import React from "react";
import { render, screen } from "@testing-library/react";
import Spinner from "./Footer";
import "@testing-library/jest-dom";

describe("Spinner Component", () => {
  it("renders the spinner container", () => {
    render(<Spinner />);
    const status = screen.getByRole("status");
    expect(status).toBeInTheDocument();
  });

  it("renders the animated spinning element", () => {
    render(<Spinner />);
    const spinner = screen.getByRole("status").querySelector("div");
    expect(spinner).toHaveClass("animate-spin");
    expect(spinner).toHaveClass("rounded-full");
    expect(spinner).toHaveClass("border-t-blue-600");
  });

  it("includes screen reader only loading text", () => {
    render(<Spinner />);
    const srText = screen.getByText("Loading...");
    expect(srText).toBeInTheDocument();
  });
});
