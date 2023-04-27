import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { useSpring } from "react-spring"
import { useToggle } from "@hooks/index"
import { CSSTransition, TransitionGroup } from "react-transition-group"
import { email } from "@data"

//*Components
import Icons from "@components/icons/Icons"
import { loadDelay, socialMedia } from "@data"
import Social from "@components/Social"
import Sidebar from "@components/Sidebar"

const StyledSide = styled.div`
  position: relative;

  .Menu {
    left: 0;
    top: 4rem;
    position: fixed;
    display: flex;
    justify-content: space-between;
    padding: 0 70px;
    z-index: 1;

    @media (max-width: 768px) {
      padding: 0 25px;
      top: 2rem;
    }

    aside {
      .socialMedia {
        @media (max-width: 768px) {
          padding-top: 10px;
          display: none;
        }
      }

      &:first-child {
        cursor: pointer;
      }
    }

    &:first-child {
      .email-link {
        position: fixed;
        right: 4rem;
        bottom: 0;
        cursor: pointer;
        align-self: flex-end;
        writing-mode: vertical-rl;
        display: flex;
        align-items: center;
        font-size: var(--fz-sm);
        font-family: var(--font-mono);

        @media (max-width: 780px) {
          display: none;
        }

        a {
          line-height: var(--fz-xxs);
          letter-spacing: 0.1em;

          &:hover,
          &:focus {
            color: var(--green);
            transition: var(--transition);
            transform: translateY(-5px);
          }
        }

        &:after {
          content: "";
          display: block;
          width: 1px;
          height: 100px;
          margin-top: 15px;
          background-color: var(--light-slate);
        }
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

    .email-link {
      display: none;
    }
  }
`

interface PropTypes {
  children: React.ReactNode
}

const LeftContent: React.FC<PropTypes> = ({ children }) => {
  const [toggle, isToggle] = useToggle()

  const [sticky, setSticky] = useState(false)

  useEffect(() => {
    const mountNavbar = () => {
      const fixed = window.pageYOffset < 9
      const innerWidth = window.innerWidth < 763
      if (!fixed && innerWidth) {
        setSticky(true)
      } else {
        setSticky(false)
      }
    }

    window.addEventListener("scroll", mountNavbar)
    return () => window.removeEventListener("scroll", mountNavbar)
  }, [sticky])

  const animatedSidebar = useSpring({
    transform: toggle ? "translateX(0%)" : "translateX(-100%)",
    marginLeft: toggle ? "0px" : "-400px",
  })

  return (
    <TransitionGroup component={null}>
      {children}
      <CSSTransition in={true} classNames="fade" timeout={loadDelay}>
        <Sidebar
          animatedSidebar={animatedSidebar}
          toogle={toggle}
          toggleSideBar={isToggle}
        >
          <StyledSide className="container">
            <div className="container-wrapper">
              {!toggle && (
                <div className={`${sticky ? "Nav" : "Menu"}`}>
                  <aside>
                    <div onClick={isToggle}>
                      <Icons name="Menu" />
                    </div>
                    <div className="socialMedia">
                      {socialMedia && (
                        <Social socialMedia={socialMedia} toggle={toggle} />
                      )}
                    </div>
                  </aside>
                  <div className="email-link">
                    <a href={`mailto:${email}`}>iandrilon2@gmail.com</a>
                  </div>
                </div>
              )}
            </div>
          </StyledSide>
        </Sidebar>
      </CSSTransition>
    </TransitionGroup>
  )
}

export default LeftContent
