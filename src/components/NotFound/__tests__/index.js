import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import NotFound from "../";

describe("Image", () => {
  test('should have src = "not-found.png" and alt = "Not Found"', () => {
    render(
      <BrowserRouter>
        <NotFound />
      </BrowserRouter>
    );
    const image = screen.getByRole("img");
    expect(image).toHaveAttribute("alt", "Not Found");
    expect(image).toHaveAttribute("src", "not-found.png");
  });
});

describe("Link", () => {
  test("should have text 'Back to Home' and path '/'", () => {
    render(
      <BrowserRouter>
        <NotFound />
      </BrowserRouter>
    );
    const href = screen.getByRole("link");
    expect(href).toHaveAttribute("href", "/");
    expect(href).toHaveTextContent("Back to Home");
  });
});
