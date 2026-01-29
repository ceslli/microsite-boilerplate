import { expect, test, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import Home from "./page";
import { getAllPages } from "@/lib/contentful";

vi.mock("@/lib/contentful");
vi.mocked(getAllPages).mockResolvedValue([]);

test("Page", async () => {
  render(await Home());
  expect(
    screen.getByRole("heading", {
      level: 1,
      name: "Welcome to our Knowledge Base",
    }),
  ).toBeDefined();
});
