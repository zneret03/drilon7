import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useSpring } from "react-spring";
import { CSSTransition, TransitionGroup } from "react-transition-group";

//*Components
import Icons from "@components/icons/Icons";
import { loadDelay, socialMedia } from "@data";
import Social from "@components/Social";
import Sidebar from "@components/Sidebar";

const StyledSide = styled.div`
  .Menu {
    left: 5rem;
    top: 4rem;
    position: fixed;
    cursor: pointer;
    z-index: 10;

    .socialMedia {
      @media (max-width: 768px) {
        padding-top: 10px;
        display: none;
      }
    }
  }

  .Nav {
    position: fixed;
    top: 0;
    left: 0;
    cursor: pointer;
    background-color: var(--navy);
    box-shadow: -10px 0px 30px -15px var(--lightest-navy);
    padding: 15px 30px;
    width: 100%;
    z-index: 10;

    .socialMedia {
      @media (max-width: 768px) {
        display: none;
      }
    }
  }
`;

interface PropTypes {
  children: React.ReactNode;
}

const LeftContent: React.FC<PropTypes> = ({ children }) => {
  const [toggle, setToggle] = useState(false);

  const toggleSideBar = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    event.preventDefault();

    if (!toggle) {
      setToggle(true);
    } else {
      setToggle(false);
    }
  };

  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const mountNavbar = () => {
      const fixed = window.pageYOffset < 9;
      const innerWidth = window.innerWidth < 763;
      if (!fixed && innerWidth) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    window.addEventListener("scroll", mountNavbar);
    return () => window.removeEventListener("scroll", mountNavbar);
  }, [sticky]);

  const animatedSidebar = useSpring({
    transform: toggle ? "translateX(0%)" : "translateX(-100%)",
    marginLeft: toggle ? "0px" : "-400px",
  });

  return (
    <TransitionGroup component={null}>
      {children}
      <CSSTransition in={true} classNames="fade" timeout={loadDelay}>
        <Sidebar
          animatedSidebar={animatedSidebar}
          toogle={toggle}
          toggleSideBar={(event) => toggleSideBar(event)}
        >
          <StyledSide className="container">
            <div className="container-wrapper">
              {!toggle && (
                <div
                  className={`${sticky ? "Nav" : "Menu"}`}
                  style={{ opacity: 1 }}
                >
                  <div onClick={(event) => toggleSideBar(event)}>
                    <Icons name="Menu" />
                  </div>
                  <div className="socialMedia">
                    {socialMedia && (
                      <Social socialMedia={socialMedia} toggle={toggle} />
                    )}
                  </div>
                </div>
              )}
            </div>
          </StyledSide>
        </Sidebar>
      </CSSTransition>
    </TransitionGroup>
  );
};

export default LeftContent;
