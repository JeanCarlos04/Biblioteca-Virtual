import {describe, it, expect} from "vitest";
import { render, screen } from "@testing-library/react";
import {MenuLibrary} from "./MenuLibrary";

describe("Should show Cargando... when loading", () => {
  it("should render the MenuLibrery component", async () => {
    render(<MenuLibrary />);
    const menuLibrary = await screen.findByText(/Cargando.../i);
    expect(menuLibrary).toBeInTheDocument();
  });
});