import React from "react";
import { createRoot } from "react-dom/client";
import ContactApp from "./components/ContactApp";
import "./style/style.css";

const root = createRoot(document.getElementById("root")).render(<ContactApp />);
