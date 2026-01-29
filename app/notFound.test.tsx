import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import { NotFound } from "./notFound";

test("Not Found Page", async () => {
  render(<NotFound />);
  expect(
    screen.getByRole("heading", {
      level: 1,
      name: "404",
    }),
  ).toBeDefined();
  expect(
    screen.getByRole("heading", {
      level: 2,
      name: "This page could not be found.",
    }),
  ).toBeDefined();
});
