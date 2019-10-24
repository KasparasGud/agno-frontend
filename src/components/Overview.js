import "styled-components/macro";
import React from "react";
import { css } from "styled-components";
import useBreakpoints from "../hooks/breakpoint";
import ListItem from "./ListItem";

const recentActivity = [
  { title: "Emotion logged", subtitle: " 13 seconds ago" },
  { title: "Emotion logged", subtitle: " 53 seconds ago" },
  { title: "Emotion logged", subtitle: " 7 minutes ago" },
  { title: "Emotion logged", subtitle: " 2 hours ago" },
  { title: "Emotion logged", subtitle: " 17 hours ago" },
  { title: "Emotion logged", subtitle: " 3 days ago" }
];

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
            Welcome back Kasparas, you have 3 new logs
          </div>
          <img
            alt=""
            css={css`
              position: absolute;
              height: ${breakPoint === "xs" || breakPoint === "sm"
                ? "12rem"
                : "19rem"};
              right: 0;
              bottom: ${breakPoint === "xs" || breakPoint === "sm"
                ? "-1rem"
                : "-3.5rem"};
            `}
            src={require("../assets/nothing.png")}
          />
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
              margin-bottom: 0.5em;
            `}
          >
            Recent activity
          </div>
          {recentActivity.map((item, index) => (
            <ListItem
              title={item.title}
              subtitle={item.subtitle}
              last={index === recentActivity.length - 1}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Overview;
