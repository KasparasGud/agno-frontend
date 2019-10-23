import "styled-components/macro";
import React from "react";
import { css } from "styled-components";
import useBreakpoints from "../hooks/breakpoint";

const Overview = () => {
  const breakPoint = useBreakpoints();

  return (
    <div
      css={css`
        font-weight: 700;
        font-size: 1.25em;
      `}
    >
      Overview
      <div
        css={css`
          display: grid;
          grid-gap: ${breakPoint === "sm" || breakPoint === "xs"
            ? "1em"
            : "2em"};
          grid-template-columns: ${breakPoint === "sm" || breakPoint === "xs"
            ? "auto"
            : "auto auto"};
          margin: ${breakPoint === "sm" || breakPoint === "xs"
            ? "1em 0"
            : "2em 0"};
        `}
      >
        <div
          css={css`
            display: grid;
            padding: 0 2em;
            background-color: #fff;
            box-shadow: 0px 0px 15px #00000010;
            grid-column: ${breakPoint === "sm" || breakPoint === "xs"
              ? "1 / span 1"
              : "1 / span 2"};
            border-radius: 10px;
            min-height: 8.5rem;
            align-items: center;
          `}
        >
          <div
            css={css`
              font-weight: 600;
              font-size: 0.75em;
            `}
          >
            Welcome back Kasparas, you have 3 new logs
          </div>
        </div>
        <div
          css={css`
            display: grid;
            padding: 1.5em 2em;
            background-color: #fff;
            box-shadow: 0px 0px 15px #00000010;
            border-radius: 10px;
            min-height: 21rem;
          `}
        >
          <div
            css={css`
              font-weight: 800;
              font-size: 0.65em;
            `}
          >
            Emotion graph
          </div>
        </div>
        <div
          css={css`
            display: grid;
            padding: 1.5em 2em;
            background-color: #fff;
            box-shadow: 0px 0px 15px #00000010;
            border-radius: 10px;
            min-height: 21rem;
          `}
        >
          <div
            css={css`
              font-weight: 800;
              font-size: 0.65em;
            `}
          >
            Recent activity
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
