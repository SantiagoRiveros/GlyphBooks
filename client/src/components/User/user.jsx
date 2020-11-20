import React from "react";
import UserSidebar from "./userSidebar.jsx";
import UserDetails from "./userDetails.jsx";
import UserOrders from "./userOrders.jsx";
import { Switch, Route } from "react-router-dom";
import { useSelector } from "react-redux";

export default function user() {
  const { user } = useSelector((state) => state.user);
  return (
    <div>
      <UserSidebar user={user} />
      <Switch>
        <Route path="/me/details" render={() => <UserDetails />} />
        <Route path="/me/orders" render={() => <UserOrders />} />
      </Switch>
    </div>
  );
}
