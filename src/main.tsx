import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter, Route, Routes } from "react-router";
import Test from "./assets/Test.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter basename="/github-io-test">
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/testing" element={<Test />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);