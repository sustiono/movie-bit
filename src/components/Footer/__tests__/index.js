import { render, screen } from "@testing-library/react";
import Footer from "../";

test("should rendered app name & copyright", () => {
  render(<Footer />);
  const appName = screen.getByText("MOVIEbit");
  const copyright = screen.getByText("Copyright © 2021 . All rights reserved.");
  expect(appName).toBeInTheDocument();
  expect(copyright).toBeInTheDocument();
});
