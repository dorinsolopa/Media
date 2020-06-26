import React from "react";
import Navbar from "../navbar/Navbar";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import { routes } from "./route";
class AppRouter extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Navbar />
        <Switch>
          {routes.map((route) => {
            return (
              <Route
                key={route.path}
                path={route.path}
                exact={true}
                component={route.component}
              />
            );
          })}
        </Switch>
      </BrowserRouter>
    );
  }
}
export default AppRouter;
