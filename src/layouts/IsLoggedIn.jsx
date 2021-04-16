import React from "react";
import { Switch, Route } from "react-router-dom";
import OrgProfile from "../views/Profile";
import Admin from "./Admin";
import Sidebar from "components/Sidebar/Sidebar.js";

const IsLoggedIn = () => {
  return (
    <>
      <Switch>
        <Route path="/profile" exact component={OrgProfile} />
        <Route path="*" component={Admin} />
      </Switch>
    </>
  );
};

export default IsLoggedIn;
