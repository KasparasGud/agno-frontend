import "styled-components/macro";
import React from "react";
import { css } from "styled-components";
import useBreakpoints from "../hooks/breakpoint";

const Monitoring = () => {
  const breakPoint = useBreakpoints();

  return (
    <div
      css={css`
        font-weight: 700;
        font-size: 1.25em;
      `}
    >
      Continuous Monitoring
      <div
        css={css`
          display: grid;
          grid-gap: ${breakPoint !== "lg" ? "1em" : "2em"};
          grid-template-columns: ${breakPoint !== "lg" ? "auto" : "auto auto"};
          margin: ${breakPoint !== "lg" ? "1em 0" : "2em 0"};
        `}
      >
        <div
          css={css`
            display: grid;
            padding: 0 2em;
            background-color: #fff;
            box-shadow: 0px 0px 15px #00000010;
            grid-column: ${breakPoint !== "lg" ? "1 / span 1" : "1 / span 2"};
            border-radius: 10px;
            min-height: 10rem;
            align-items: center;
            flex-direction: row;
            position: relative;
          `}
        >
          <div
            css={css`
              font-weight: 600;
              font-size: 0.75em;
              max-width: 45%;
            `}
          >
            Based on emotions in last 2 months you seem to have depressive
            tendencies
          </div>
          <img
            alt=""
            css={css`
              position: absolute;
              right: 0.5rem;
              height: ${breakPoint === "xs" || breakPoint === "sm"
                ? "12rem"
                : "19rem"};
              right: 0;
              bottom: ${breakPoint === "xs" || breakPoint === "sm"
                ? "-1rem"
                : "-3.5rem"};
            `}
            src={require("../assets/sad.png")}
          />
        </div>
      </div>
    </div>
  );
};

export default Monitoring;
