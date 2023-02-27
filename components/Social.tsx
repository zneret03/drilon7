import React from "react"
import styled from "styled-components"
import Icons from "./icons/Icons"
import Link from "next/link"

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
    transition: var(--transition);

    &:hover,
    &:focus {
      transform: translateY(-3px);
    }

    svg {
      &:hover,
      &:focus {
        fill: #fff;
      }

      fill: #8690b0;
    }
  }
`

interface PropTypes {
  socialMedia: Object[]
  toggle: boolean
}

const Social: React.FC<PropTypes> = ({ socialMedia, toggle }) => {
  return (
    <>
      {!toggle && (
        <StyledSocialList>
          {socialMedia.map((icon: any, index: number) => (
            <li key={index}>
              <Link href={icon.url}>
                <a aria-label={icon.name}>
                  <Icons name={icon.name} />
                </a>
              </Link>
            </li>
          ))}
        </StyledSocialList>
      )}
    </>
  )
}

export default Social
