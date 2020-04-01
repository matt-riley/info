/** @jsx jsx */

import React from "react";
import { css, jsx } from "@emotion/core";
import breakpoints from "../../utils/breakpoints";
import { useTheme } from "emotion-theming";

const coreNavStyles = (props: any) => css`
  width: 100%;
  background-color: ${props.bgColor ? props.bgColor : "#444444"};
  position: fixed;
  top: 0;
  left: 0;
  font-family: Arial, Helvetica, sans-serif;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-items: center;
  align-items: center;

  a {
    text-decoration: none;
  }
  ul {
    list-style: none;
    margin: 0;
    padding-left: 0;
  }

  li {
    color: #fff;
    display: block;
    float: left;
    padding: 1rem;
    position: relative;
    text-decoration: none;
    transition-duration: 0.5s;
  }

  li a {
    color: #fff;
  }

  li:hover {
    cursor: pointer;
  }

  ul li ul {
    visibility: hidden;
    opacity: 0;
    min-width: 5rem;
    position: absolute;
    transition: all 0.5s ease;
    margin-top: 1rem;
    left: 0;
    display: none;
  }

  ul li:hover > ul,
  ul li:focus-within > ul, /* this is the line we add */
  ul li ul:hover {
    background-color: #444;
    visibility: visible;
    opacity: 1;
    display: block;
  }

  ul li ul li {
    clear: both;
    width: 100%;
  }
  ${breakpoints[1]} {
  }
`;

export const Nav: React.FC = () => {
  const theme = useTheme();
  return (
    <nav css={coreNavStyles(theme)} role="navigation">
      <h3>Matt Riley</h3>
      <ul>
        <li>
          <a href="#">One</a>
        </li>
        <li>
          <a href="#">Two</a>
          <ul className="dropdown">
            <li>
              <a href="#">Sub-1</a>
            </li>
            <li>
              <a href="#">Sub-2</a>
            </li>
            <li>
              <a href="#">Sub-3</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#">Three</a>
        </li>
      </ul>
    </nav>
  );
};
