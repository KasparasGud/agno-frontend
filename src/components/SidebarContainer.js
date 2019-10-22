import "styled-components/macro";
import React, { memo } from "react";
import { css } from "styled-components";
import {
  Sidebar,
  SidebarHeader,
  SidebarMainBlock,
  SidebarFooter
} from "./Sidebar";
import { BigLink } from "./BigLink";
import useRouter from "use-react-router";
import { useHistory } from "react-router-dom";
import { matchPath } from "react-router-dom";

const SidebarContainer = ({ logout }) => {
  const { location } = useRouter();
  const history = useHistory();

  const isActive = path =>
    !!matchPath(location.pathname, {
      path
    });

  const onClick = path => () => {
    history.push(path);
  };

  return (
    <div
      css={css`
        width: 14em;
        height: 100%;
        flex-shrink: 0;
      `}
    >
      <Sidebar>
        <SidebarHeader onClick={onClick("/dashboard/one")}>Agno</SidebarHeader>
        <SidebarMainBlock>
          <BigLink
            active={isActive("/dashboard/one")}
            onClick={onClick("/dashboard/one")}
          >
            One
          </BigLink>
          <BigLink
            active={isActive("/dashboard/two")}
            onClick={onClick("/dashboard/two")}
          >
            Two
          </BigLink>
          <BigLink
            active={isActive("/dashboard/three")}
            onClick={onClick("/dashboard/three")}
          >
            Three
          </BigLink>
        </SidebarMainBlock>
        <SidebarFooter>
          <BigLink onClick={logout}>Logout</BigLink>
        </SidebarFooter>
      </Sidebar>
    </div>
  );
};

export default memo(SidebarContainer);
