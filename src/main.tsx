import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

const container = document.getElementById("root")!;
const loaderContainer = document.getElementById("loader-root")!;

setTimeout(() => {
  loaderContainer.classList.add("fade-out");

  setTimeout(() => {
    loaderContainer.remove();

    createRoot(container).render(
      <StrictMode>
        <App />
      </StrictMode>
    );
  }, 1000);
}, 5000);
