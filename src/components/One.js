import React from "react";
import styled, { css } from "styled-components";

export default function One() {
  return (
    <div
      css={css`
        display: flex;
        flex-grow: 1;
        flex-shrink: 1;
        background-color: "#FFF";
        width: 100%;
      `}
    >
      One
    </div>
  );
}
