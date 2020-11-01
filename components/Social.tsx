import React from "react";
import styled from "styled-components";
import Icons from "./icons/Icons";

const StyledSocialList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  padding: 0;
  list-style: none;
  position: fixed;

  &:before {
    content: "";
    display: block;
    width: 1px;
    height: 150px;
    margin: 20px 0px;
    background-color: var(--light-slate);
  }

  li {
    padding: 30px 0px 0px;

    &:hover,
    &:focus {
      transform: translateY(-3px);
    }

    svg {
      &:hover,
      &focuse {
        fill: #fff;
      }

      fill: #8690b0;
    }
  }
`;

interface PropTypes {
  socialMedia: Object[];
}

const Social: React.FC<PropTypes> = ({ socialMedia }) => {
  return (
    <StyledSocialList>
      {socialMedia.map((icon: any, index: number) => (
        <li key={index}>
          <a href={icon.url} aria-label={icon.name}>
            <Icons name={icon.name} />
          </a>
        </li>
      ))}
    </StyledSocialList>
  );
};

export default Social;
