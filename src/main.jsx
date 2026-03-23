import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import Header from "./components/Header/Header.jsx";
import Hero from "./pages/Hero/Hero.jsx";
import "./scss/global.scss";
import "./i18n.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Header />
    <Hero />
    <App />
  </StrictMode>,
);
