import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Main } from "../components/main/Main";
import { DashboardRoutes } from "./DashboardRoutes";
import { Nav } from '../components/nav/Nav'

export const AppRouter = () => {
    return (
        <Router>
      <div>
          <Nav></Nav>
        <Switch>
         <Route exact path="/main" component={Main} />

         <Route path="/" component={DashboardRoutes} />
        </Switch>
      </div>
    </Router>
    )
}