import "styled-components/macro";
import React from "react";
import { css } from "styled-components";

export const BigLink = ({ icon, count, children, active, ...rest }) => (
  <button
    css={css`
      touch-action: none;
      user-select: none;
      display: flex;
      flex-shrink: 0;
      position: relative;
      justify-content: space-between;
      text-decoration: none;
      font-size: 0.9rem;
      margin: 0;
      padding: 1em 1.5em 1em 2em;
      font-weight: 600;
      overflow: hidden;
      border-top-right-radius: 4px;
      border-bottom-right-radius: 4px;
      color: ${active ? "#FFF" : "#000"};
      background-color: ${active ? "#555" : "#FFF"};
      outline: none;
      border: none;
      cursor: pointer;
    `}
    {...rest}
  >
    <div
      css={css`
        display: flex;
        align-items: center;
      `}
    >
      <div>{children}</div>
    </div>
  </button>
);
