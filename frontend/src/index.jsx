import React from "react";
import ReactDOMClient from "react-dom/client";
import { StatusHover } from "./screens/StatusHover";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<StatusHover />);
