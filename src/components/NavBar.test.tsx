import { render, screen } from "@testing-library/react";
import React from "react";
import NavBar from "../components/NavBar";
import "@testing-library/jest-dom";
import { useRouter } from "next/router";

jest.mock("next/router", () => ({
    useRouter: jest.fn(),
}));

describe("NavBar Component", () => {
    beforeEach(() => {
        (useRouter as jest.Mock).mockReturnValue({
            pathname: "/",
        });
    });

    it("renders brand/logo text", () => {
        render(<NavBar />);
        expect(screen.getByText("Mini")).toBeInTheDocument();
    });

    it("renders all navigation links", () => {
        render(<NavBar />);

        expect(screen.getByTestId("ourcart")).toBeInTheDocument();
    });

    it("has correct link paths", () => {
        render(<NavBar />);
        expect(screen.getByText("Mini").closest("a")).toHaveAttribute(
            "href",
            "/"
        );
        expect(screen.getByTestId("ourcart").closest("a")).toHaveAttribute(
            "href",
            "/cart"
        );
    });
});
