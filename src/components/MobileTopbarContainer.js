import React, { useState } from "react";
import MobileTopbar from "./MobileTopbar";
import useBreakpoints from "../hooks/breakpoint";
import {
  Sidebar,
  SidebarHeader,
  SidebarMainBlock,
  SidebarFooter
} from "./Sidebar";
import { matchPath } from "react-router-dom";
import useRouter from "use-react-router";
import { BigLink } from "./BigLink";

const MobileTopbarContainer = ({ logout }) => {
  const [isOpen, setIsOpen] = useState(false);
  const breakPoint = useBreakpoints();
  const { location, history } = useRouter();

  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);

  const isActive = path =>
    !!matchPath(location.pathname, {
      path
    });

  const title = isActive("/dashboard/one")
    ? "One"
    : isActive("/dashboard/two")
    ? "Two"
    : isActive("/dashboard/three")
    ? "Three"
    : "";

  const onClick = path => () => {
    history.push(path);
    setIsOpen(false);
  };

  if (breakPoint === "md" || breakPoint === "lg") {
    return null;
  }
  return (
    <MobileTopbar
      open={isOpen}
      onRequestClose={close}
      onRequestOpen={open}
      sidebar={
        <Sidebar>
          <SidebarHeader onClick={onClick("/dashboard")}>Agno</SidebarHeader>
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
      }
      avatarUrl={""}
      title={title}
    />
  );
};

export default MobileTopbarContainer;
