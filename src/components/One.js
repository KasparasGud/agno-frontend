import React from "react";
import styled, { css } from "styled-components";

export default function One() {
  return (
    <div
      css={`
        display: flex;
        flex: 1;
        flex-grow: 1;
        flex-direction: row;
        height: 100%;
        width: 100%;
      `}
    >
      One
    </div>
  );
}
