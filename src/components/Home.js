import "styled-components/macro";
import React, { useState } from "react";
import { Redirect, Switch, Route } from "react-router-dom";
import { css } from "styled-components";
import SidebarContainer from "./SidebarContainer";
import MobileTopbarContainer from "./MobileTopbarContainer";
import Overview from "./Overview";
import Two from "./Two";
import Three from "./Three";
import useBreakpoints from "../hooks/breakpoint";

export default function Home() {
  const [logout, setLogout] = useState(false);
  const breakPoint = useBreakpoints();

  const logoutHandle = () => {
    localStorage.clear();
    setLogout(true);
  };

  const Vertical = () => (
    <div
      css={css`
        display: flex;
        flex-grow: 1;
        flex-direction: column;
        height: 100%;
      `}
    >
      <Switch>
        <Redirect from="/" exact to="/dashboard" />
        <Redirect from="/dashboard" exact to="/dashboard/overview" />
        <Route path="/dashboard">
          <Switch>
            <Route
              path={[
                "/dashboard/overview",
                "/dashboard/two",
                "/dashboard/three"
              ]}
            >
              <MobileTopbarContainer logout={logoutHandle} />
              <div
                css={css`
                  display: flex;
                  flex-direction: column;
                  min-height: 0;
                  min-width: 0;
                  flex-grow: 1;
                  overflow-y: auto;
                  -webkit-overflow-scrolling: touch;
                  padding: 1.5em 2em;
                `}
              >
                <Switch>
                  <Route path="/dashboard/overview" component={Overview} />
                  <Route path="/dashboard/two" component={Two} />
                  <Route path="/dashboard/three" component={Three} />
                </Switch>
              </div>
            </Route>
          </Switch>
        </Route>
      </Switch>
    </div>
  );

  const Dashboard = () => (
    <div
      css={css`
        display: flex;
        -webkit-box-flex: 1;
        flex-grow: 1;
        flex-direction: row;
        height: 100%;
        background-color: #f4f5fa;
      `}
    >
      <SidebarContainer logout={logoutHandle} />
      <div
        css={css`
          display: flex;
          flex-direction: column;
          min-height: 0;
          min-width: 0;
          overflow-y: auto;
          flex-grow: 1;
          flex: 1;
          -webkit-overflow-scrolling: touch;
          padding: 1.5em 4em;
        `}
      >
        <Switch>
          <Redirect from="/" exact to="/dashboard" />
          <Redirect from="/dashboard" exact to="/dashboard/overview" />
          <Route path="/dashboard">
            <Route path="/dashboard/overview" component={Overview} />
            <Route path="/dashboard/two" component={Two} />
            <Route path="/dashboard/three" component={Three} />
          </Route>
        </Switch>
      </div>
    </div>
  );

  return logout ? (
    <Redirect to="/login" />
  ) : breakPoint === "md" || breakPoint === "lg" ? (
    <Dashboard />
  ) : (
    <Vertical />
  );
}
