import React from "react";
import UserSidebar from "./userSidebar.jsx";
import UserDetails from "./userDetails.jsx";
import UserOrders from "./userOrders.jsx";
import { Switch, Route } from "react-router-dom";
import { useSelector } from "react-redux";

export default function User(logOut) {
  const { user } = useSelector((state) => state.user);
  return (
    <div>
      <UserSidebar user={user} logOut={logOut} />
      <Switch>
        <Route
          path="/cuenta/details"
          render={() => <UserDetails user={user} />}
        />
        <Route
          path="/cuenta/orders"
          render={() => <UserOrders user={user} />}
        />
      </Switch>
    </div>
  );
}
