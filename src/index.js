import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/styles/tailwind.css";

// layouts
import Auth from "layouts/Auth.js";
import IsLoggedIn from "layouts/IsLoggedIn";

const loggedIn = true;

ReactDOM.render(
  <BrowserRouter>{loggedIn ? <IsLoggedIn /> : <Auth />}</BrowserRouter>,
  document.getElementById("root")
);
