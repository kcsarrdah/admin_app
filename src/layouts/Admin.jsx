import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

// components

import AdminNavbar from "components/Navbars/AdminNavbar.js";
import Sidebar from "components/Sidebar/Sidebar.js";
import HeaderStats from "components/Headers/HeaderStats.js";
import FooterAdmin from "components/Footers/FooterAdmin.js";
import EditProfile from "../views/EditProfile.jsx";

// views
import Statistics from "views/admin/Statistics.js";
import PerksManagement from "views/admin/PerksManagement.js";
import EmployeeManagement from "views/admin/EmployeeManagement.js";

export default function Admin() {
  return (
    <>
      <Sidebar />
      <div className="relative md:ml-64 bg-blueGray-100 min-h-screen">
        <AdminNavbar />
        {/* Header */}
        <HeaderStats />
        <div className="px-4 md:px-10 mx-auto w-full -m-24">
          <Switch>
            <Route
              path="/admin/empManagement"
              exact
              component={EmployeeManagement}
            />
            <Route
              path="/admin/perksManagement"
              exact
              component={PerksManagement}
            />
            <Route path="/admin/statistics" exact component={Statistics} />

            <Route
              path="/admin/empManagement/edit"
              exact
              component={EditProfile}
            />
            <Redirect from="/" to="/admin/empManagement" />
          </Switch>
          <FooterAdmin fixed />
        </div>
      </div>
    </>
  );
}
