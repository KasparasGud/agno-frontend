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
        -webkit-box-flex: 1;
        flex-grow: 1;
        flex-direction: row;
        height: 100%;
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
        `}
      >
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
    </div>
  );
}
