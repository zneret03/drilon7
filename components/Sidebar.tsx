import React from "react"
import { animated } from "react-spring"
import styled from "styled-components"
import { sideLink } from "@data"
import { X } from "react-feather"
import { Helmet } from "react-helmet"

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 10;
  overflow: auto;
  height: 100vh;

  /**Firefox */
  @-moz-document url-prefix() {
    width: 350px;

    @media (max-width: 768px) {
      width: 300px;
    }

    @media (max-width: 480px) {
      width: 250px;
    }
  }
  /* 
  @media (max-width: 768px) {
    width: min(vw, 400px);
  }

  @media (max-width: 480px) {
    width: min(60vw, 400px);
  } */
`

const SideBarWrapper = styled.div`
  list-style: none;
  background-color: var(--light-navy);
  height: 100vh;
  border: 0;
  width: min(65vw, 350px);

  div {
    text-align: right;
    padding: 30px 30px;
    cursor: pointer;
  }

  ul {
    padding: 0;
    margin: 0;
    width: 100%;
    text-align: center;

    .resume {
      &:hover {
        background-color: #053041;
      }
    }

    li {
      position: relative;
      margin: 0 auto 45px;
      counter-increment: item 1;

      &:before {
        content: "0" counter(item) ".";
        display: block;
        margin-bottom: 5px;
        color: var(--green);
        font-size: var(--fz-sm);
      }

      a {
        text-decoration: none;
        color: var(--light-slate);
        font-size: clamp(var(--fz-sm), 4vw, var(--fz-lg));
        font-size: 25px;

        &:hover {
          color: var(--white);
        }
      }
    }
  }
`

interface PropTypes {
  animatedSidebar: any
  toogle: boolean
  children: React.ReactNode
  toggleSideBar: React.MouseEventHandler<HTMLDivElement>
}

const Sidebar: React.FC<PropTypes> = ({
  animatedSidebar,
  toggleSideBar,
  children,
  toogle,
}) => {
  const resume = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault()
    window.open(
      "https://docs.google.com/document/d/17J66_oH5CYMqbK6NmBIL36s1SVR7DDvM3VEAEt5dOaw/edit?usp=sharing"
    )
  }

  return (
    <>
      <Helmet>
        <body className={toogle ? "blur" : ""} />
      </Helmet>
      <Wrapper>
        <animated.div style={animatedSidebar}>
          <SideBarWrapper>
            <div onClick={toggleSideBar}>
              <X color="#fff" />
            </div>
            <ul>
              {sideLink.map((link: any) => (
                <li key={link.id}>
                  <a href={link.url}>{link.name}</a>
                </li>
              ))}

              <button className="resume" onClick={(event) => resume(event)}>
                Resume
              </button>
            </ul>
          </SideBarWrapper>
        </animated.div>
      </Wrapper>
      {children}
    </>
  )
}

export default Sidebar
