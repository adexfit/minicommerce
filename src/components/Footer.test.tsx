import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Footer from "./Footer";

describe("Footer Component", () => {
    it("renders the copyright text", () => {
        render(<Footer />);

        const textElement = screen.getByText(/© 2025 MiniCommerce/i);
        expect(textElement).toBeInTheDocument();
    });

    it("renders with correct tag and classes", () => {
        render(<Footer />);

        const footer = screen.getByRole("contentinfo"); // footer tag uses this implicit role
        expect(footer).toHaveClass("bg-gray-800");
        expect(footer).toHaveClass("text-white");
        expect(footer).toHaveClass("text-center");
    });
});
