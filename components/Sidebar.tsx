import React from "react";
import { animated } from "react-spring";
import styled from "styled-components";
import { sideLink } from "./utils/config";
import { X } from "react-feather";
import { Helmet } from "react-helmet";

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 10;
  overflow: auto;

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
`;

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
`;

interface PropTypes {
  animatedSidebar: any;
  toogle: boolean;
  children: React.ReactNode;
  toggleSideBar: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

const Sidebar: React.FC<PropTypes> = ({
  animatedSidebar,
  toggleSideBar,
  children,
  toogle,
}) => {
  return (
    <>
      <Helmet>
        <body className={toogle ? "blur" : ""} />
      </Helmet>
      <Wrapper>
        <animated.div style={animatedSidebar}>
          <SideBarWrapper>
            <div onClick={(event) => toggleSideBar(event)}>
              <X color="#fff" />
            </div>
            <ul>
              {sideLink.map((link: any) => (
                <li key={link.id}>
                  <a href={link.url}>{link.name}</a>
                </li>
              ))}

              <button className="resume">Resume</button>
            </ul>
          </SideBarWrapper>
        </animated.div>
      </Wrapper>
      {children}
    </>
  );
};

export default Sidebar;
