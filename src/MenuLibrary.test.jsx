import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import SearchBooks from "./components/SearchBooks";

describe("Should show Cargando... when loading", () => {
  it("should render the SearchBooks component with loading state", async () => {
    render(<SearchBooks />);
    const loadingText = await screen.findByText(/Cargando.../i);
    expect(loadingText).toBeInTheDocument();
  });
});
