import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/styles/tailwind.css";

// layouts
import Admin from "layouts/Admin.jsx";
import Auth from "layouts/Auth.js";

const loggedIn = true;

ReactDOM.render(
  <BrowserRouter>
    {/* <Switch>
      <Route path="/" exact component={Auth} />
      <Route path="/admin" component={Admin} />

      <Route path="/auth" component={Auth} />
      <Route path="/profile" exact component={Profile} />

      <Redirect from="*" to="/" />
    </Switch> */}

    {loggedIn ? <Admin /> : <Auth />}
  </BrowserRouter>,
  document.getElementById("root")
);
