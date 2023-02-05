import { render, screen } from "@testing-library/react";
import Home from "../pages/index";
import "@testing-library/jest-dom";

describe("Home", () => {
  it("renders welcome test in home", () => {
    render(<Home />);

    const welcome = screen.getByText("Welcome to Vincent ToDo Application");

    expect(welcome).toBeInTheDocument();
  });
});
