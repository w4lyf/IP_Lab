import "../global.css";
import "../styleguide.css";
import React from "react";
import ReactDOMClient from "react-dom/client";
import { Web } from "./screens/Web";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<Web />);
