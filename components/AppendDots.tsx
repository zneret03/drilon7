import { SlickDotTypes } from "@lib/types";
import React from "react";
import styled from "styled-components";

const Dots = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 20px;
  padding: 0;
  margin: 0;
  list-style: none;

  button {
    border: none;
    padding: 0;
    font-size: 0;
    width: 20px;
    height: 20px;
    cursor: pointer;
    background-color: transparent;
  }

  li {
    height: 20px;
    width: 20px;
    border-bottom: 2px solid var(--light-navy);

    &:focus {
      cursor: pointer;
    }

    &.slick-active {
      border-bottom: 2px solid var(--green);
    }
  }
`;

export default function AppendDots({ dots }: SlickDotTypes): JSX.Element {
  return <Dots>{dots}</Dots>;
}
