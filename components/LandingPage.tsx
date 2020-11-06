import React, { useState, useEffect } from "react";
import { useSpring } from "react-spring";
import styled from "styled-components";
//*
import Social from "./Social";
import { socialMedia } from "../utils/config";
import Icons from "./icons/Icons";
import Sidebar from "./Sidebar";

const DivWrapper = styled.div`
  height: 100vh;
  width: 100%;

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

  .Menu {
    position: fixed;
    cursor: pointer;
    z-index: 10;

    .socialMedia {
      @media (max-width: 768px) {
        display: none;
      }
    }
  }

  #curvedRight {
    position: absolute;
    top: 0;
    right: 0;
    z-index: -1;

    @media (max-width: 768px) {
      display: none;
    }
  }

  section {
    padding: 60px 100px;
    color: #dbcfcf;
    line-height: 7;

    h1 {
      font-family: var(--font-mono);
      margin: 0px 0px 15px 4px;
      font-size: clamp(5px, 5vw, 20px);
      font-weight: normal;
      color: #fff;
    }

    h2 {
      font-family: var(--font-sans);
      font-size: clamp(45px, 5vw, 80px);
      font-weight: 600px;
      letter-spacing: 2px;
    }

    h2:nth-child(2) {
      color: var(--slate);
    }

    p {
      font-family: var(--font-sans);
      font-size: clamp(10px, 5vw, 20px);
      max-width: 430px;
      resize: both;
      line-height: 27px;
      color: var(--slate);
    }

    @media (max-width: 1080px) {
      padding: 60px 90px;
    }

    @media (max-width: 768px) {
      padding: 60px 0px;
    }

    @media (max-width: 480px) {
      padding: 60px 10px;
    }
  }
`;

const LandingPage = () => {
  const [toggle, setToggle] = useState(false);

  const redirectEmail = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();

    window.location.href = "mailto:iandrilon2@gmail.com";
  };

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

  console.log(sticky);

  const animatedSidebar = useSpring({
    transform: toggle ? "translateX(0%)" : "translateX(-100%)",
    marginLeft: toggle ? "0px" : "-400px",
  });

  return (
    <>
      <Sidebar
        animatedSidebar={animatedSidebar}
        toogle={toggle}
        toggleSideBar={(event) => toggleSideBar(event)}
      />
      <div className="container">
        <div className="container-wrapper">
          <DivWrapper>
            <div>
              <Icons name="CurveRight" />
            </div>
            {!toggle && (
              <div className={`${sticky ? "Nav" : "Menu"}`}>
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
            <section>
              <div>
                <h1>Hi, my name is</h1>
              </div>
              <div>
                <h2>Ian A Drilon.</h2>
                <h2>I build things for web.</h2>
              </div>
              <div>
                <p>
                  I’m a student of Iloilo Science and Technology University,
                  taking a Bachelor of Science in Computer Science.
                </p>
              </div>
              <div>
                <button type="button" onClick={(event) => redirectEmail(event)}>
                  Get In Touch
                </button>
              </div>
            </section>
          </DivWrapper>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
