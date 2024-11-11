import React from "react";
import ReactDom from "react-dom/client"
import App from "./App.js"

const hello = ReactDom.createRoot(document.getElementById("root"))
hello.render(<App/>)