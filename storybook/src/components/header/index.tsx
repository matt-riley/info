/** @jsx jsx */

import React from "react";
import { css, jsx } from "@emotion/core";

const headerStyle = css({
  width: 100,
  color: "black",
  backgroundColor: "white"
});

export const Header = () => <header css={headerStyle}>Hi</header>;
