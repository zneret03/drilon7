import React, { useState, useEffect } from "react";
import { useSpring } from "react-spring";
import styled from "styled-components";
import { CSSTransition, TransitionGroup } from "react-transition-group";

//*Component
import { loadDelay, enterDelay } from "./utils/config";
import Icons from "./icons/Icons";

const DivWrapper = styled.div`
  min-height: 100vh;

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
    padding: 50px 100px;
    color: #dbcfcf;
    line-height: 7;

    h1 {
      font-family: var(--font-mono);
      margin: 0px 0px 15px 4px;
      font-size: clamp(5px, 5vw, 20px);
      font-weight: normal;
      color: #fff;

      @-moz-document url-prefix() {
        font-size: 20px;
      }
    }

    h2 {
      font-family: var(--font-sans);
      font-size: clamp(45px, 5vw, 80px);
      font-weight: 600px;
      letter-spacing: 2px;

      @-moz-document url-prefix() {
        font-size: 60px;
        font-weight: 600px;

        @media (max-width: 1080px) {
          font-size: 60px;
        }

        @media (max-width: 768px) {
          font-size: 50px;
        }

        @media (max-width: 480px) {
          font-size: 40px;
        }
      }
    }

    h2:nth-child(2) {
      color: var(--slate);
    }

    p {
      font-family: var(--font-sans);
      font-size: clamp(10px, 5vw, 17px);
      max-width: 550px;
      letter-spacing: 1px;
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
    window.location.href =
      "https://mail.google.com/mail/u/0/?view=cm&fs=1&to=iandrilon2@gmail.com&tf=1";
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

  const [isMounted, setIsMounted] = useState<boolean>(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsMounted(true);
    }, enterDelay);

    return () => clearTimeout(timeout);
  }, []);

  const one = <h1>Hi, my name is</h1>;

  const two = (
    <div>
      <h2>Ian A Drilon.</h2>
      <h2>I build things for web.</h2>
    </div>
  );

  const three = (
    <p>
      I’m a Computer Science student of Iloilo Science and Technology
      University, specializing in building websites application dynamic, static
      or anything in between.
    </p>
  );

  const four = (
    <button type="button" onClick={(event) => redirectEmail(event)}>
      Get In Touch
    </button>
  );

  const five = (
    <div>
      <Icons name="CurveRight" />
    </div>
  );

  const items = [one, two, three, four];
  const icons = [five];

  return (
    <DivWrapper id="home">
      <TransitionGroup component={null}>
        {isMounted &&
          icons.map((icons: any, index: number) => (
            <CSSTransition
              key={index}
              in={true}
              classNames="fade"
              timeout={loadDelay}
            >
              <div style={{ transitionDelay: `${index + 1}00ms` }}>{icons}</div>
            </CSSTransition>
          ))}
      </TransitionGroup>

      <TransitionGroup in={true} component={null}>
        <section>
          {isMounted &&
            items.map((items: any, index: number) => (
              <CSSTransition
                in={true}
                key={index}
                classNames="fadeup"
                timeout={loadDelay}
              >
                <div style={{ transitionDelay: `${index + 1}00ms` }}>
                  {items}
                </div>
              </CSSTransition>
            ))}
        </section>
      </TransitionGroup>
    </DivWrapper>
  );
};

export default LandingPage;
