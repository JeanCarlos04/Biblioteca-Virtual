import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ContextLibraryProvider } from "./contexts/ContextLibrary.jsx";
<<<<<<< HEAD
import { BrowserRouter } from "react-router-dom";
=======
>>>>>>> e25c9bffbc2786cfa7dcc733a2c7b45059368ebb
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
<<<<<<< HEAD
    <BrowserRouter>
      <ContextLibraryProvider>
        <App />
      </ContextLibraryProvider>
    </BrowserRouter>
  </StrictMode>
);
=======
    <ContextLibraryProvider>
      <App />
    </ContextLibraryProvider>
  </StrictMode>
);
>>>>>>> e25c9bffbc2786cfa7dcc733a2c7b45059368ebb
