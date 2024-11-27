import { BrowserRouter } from "react-router-dom";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ContextLibraryProvider } from "./contexts/ContextLibrary.jsx";
import "./index.css";
import App from "./App.jsx";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ContextLibraryProvider>
        <App />
      </ContextLibraryProvider>
    </BrowserRouter>
  </StrictMode>
);
