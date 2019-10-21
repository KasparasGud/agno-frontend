import "styled-components/macro";
import React, { useState } from "react";
import { Redirect, Switch, Route, Link } from "react-router-dom";
import styled, { css } from "styled-components";
import SidebarContainer from "./SidebarContainer";
import One from "./One";
import Two from "./Two";
import Three from "./Three";

export default function Home() {
  const [logout, setLogout] = useState(false);

  const logoutHandle = () => {
    localStorage.clear();
    setLogout(true);
  };
  return logout ? (
    <Redirect to="/login" />
  ) : (
    <div
      css={`
        display: flex;
        flex-grow: 1;
        flex-direction: row;
        height: 100%;
        background-color: "#000";
      `}
    >
      <SidebarContainer logout={logoutHandle} />
      <Switch>
        <Redirect from="/" exact to="/dashboard" />
        <Redirect from="/dashboard" exact to="/dashboard/one" />
        <Route path="/dashboard">
          <Route path="/dashboard/one" component={One} />
          <Route path="/dashboard/two" component={Two} />
          <Route path="/dashboard/three" component={Three} />
        </Route>
      </Switch>
    </div>
  );
}
