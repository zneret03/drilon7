import React, { useState, useEffect } from "react"
import { SEO } from "@components"
import styled, { keyframes } from "styled-components"
import { CSSTransition, TransitionGroup } from "react-transition-group"
import Image from "next/image"

//*Component
import { loadDelay, enterDelay } from "@data"
import Icons from "./icons/Icons"

const float = keyframes`
  	0% {
		  transform: translatey(0px);
	  }
    50% {
      transform: translatey(-15px);
    }
    100% {
      transform: translatey(0px);
    }
`

const DivWrapper = styled.div`
  background-color: #06172f;

  @media (max-width: 1080px) {
    background-color: var(--navy);
  }

  /* #curvedRight {
    position: absolute;
    top: 0;
    right: 0;
    z-index: -1;

    @media (max-width: 768px) {
      display: none;
    }
  } */

  section {
    width: 100vw;
    position: relative;
    padding: 155px 0;
    color: #dbcfcf;
    display: flex;
    flex-shrink: 0;
    align-items: center;
    gap: 8rem;

    @media (max-width: 1100px) {
      display: block;
    }

    .right-content {
      @media (max-width: 1100px) {
        display: none;
      }

      .card {
        display: flex;
        gap: 10px;
        padding: 16px 20px;
        border-radius: var(--border-radius);
        position: absolute;
        right: -120px;
        z-index: 1;
        height: auto;
        background-color: var(--dark-navy-50);
        animation: ${float} 6s ease-in-out infinite;

        img {
          border: 2px solid var(--light-slate);
          object-fit: cover;
          border-radius: 50%;
          width: 36px;
          height: 36px;
        }

        .card-wrapper {
          line-height: 18px;
          color: var(--lightest-slate-20);
          display: flex;
          flex-direction: column;
          gap: 4px;

          .rating {
            gap: 2px;
            margin: 4px 0 0;
            display: flex;
            align-items: center;
          }

          .title {
            font-size: 16px;
          }

          .sub-title {
            font-size: 14px;
          }
        }
      }

      .image {
        position: absolute;
        right: 0;
        bottom: 0;
        transform: translateX(120px);

        @media (max-width: 1200px) {
          transform: translateX(80px);
        }
      }

      .box {
        background: transparent;
        border: 2px solid var(--green);
        border-radius: 5px;
        width: 350px;
        height: 350px;
        transform: rotate(-430deg);
      }
    }

    .btn-contact {
      transition: var(--transition);
      margin-top: 80px;
      display: flex;
      align-items: center;
      gap: 0.9em;
      cursor: pointer;
      width: 160px;
      height: 20px;

      .btn-text {
        font-weight: bold;
        font-size: 15px;
        font-family: var(--font-mono);
      }

      &:hover {
        transform: translateX(5px);
      }
    }

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
      font-size: clamp(45px, 5vw, 150px);
      font-weight: 600px;
      letter-spacing: 2px;

      @media (max-width: 1080px) {
        font-size: clamp(65px, 5vw, 150px);
      }

      @media (max-width: 768px) {
        font-size: clamp(50px, 5vw, 150px);
      }

      @media (max-width: 480px) {
        font-size: clamp(45px, 5vw, 150px);
      }

      @-moz-document url-prefix() {
        font-size: 45px;
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

    @media (max-width: 1200px) {
      padding: 120px 100px;
    }

    @media (max-width: 768px) {
      padding: 100px 40px;
    }

    @media (max-width: 480px) {
      padding: 110px 27px;
    }
  }
`

const LandingPage = () => {
  const [toggle, setToggle] = useState(false)

  const redirectEmail = (
    event: React.MouseEvent<HTMLSpanElement, MouseEvent>
  ) => {
    event.preventDefault()
    const typeFormRedirect = "TypeForm"
    window.open(typeFormRedirect)
  }

  const toggleSideBar = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    event.preventDefault()

    if (!toggle) {
      setToggle(true)
    } else {
      setToggle(false)
    }
  }

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

  const [isMounted, setIsMounted] = useState<boolean>(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const one = (
    <div>
      <h2>Hey Folks</h2>
      <h2>I'm Ian Drilon</h2>
    </div>
  )

  const two = (
    <p>
      A freelance Developer/Software Developer in Philippines, graduated in
      Iloilo Science and Technology University, taking up Bachelor in Computer
      Science degree
    </p>
  )

  const three = (
    <div className="btn-contact">
      <span className="btn-text" onClick={(event) => redirectEmail(event)}>
        Reach me out
      </span>
      <i>
        <Icons name="Arrow" />
      </i>
    </div>
  )

  const four = (
    <div className="right-content">
      <div className="card">
        <img src="/image/card-profile.jpg" alt="" />
        <div className="card-wrapper">
          <span className="title">Ian Drilon</span>
          <span className="sub-title">Soft. Developer</span>
          <div className="rating">
            {[...Array(5)].map(() => {
              return <Icons name="Star" fill="#2AFF4C" />
            })}
          </div>
        </div>
      </div>

      <div className="box" />

      <div className="image">
        <Image
          src={"/image/self.png"}
          alt="Picture of the author"
          width={600}
          height={600}
        />
      </div>
    </div>
  )

  // const five = (
  //   <div>
  //     <Icons name="CurveRight" />
  //   </div>
  // );

  const items = [one, two, three]
  const leftContent = [four]
  // const icons = [five];

  return (
    <>
      <SEO title="Ian Drilon" content="Landing Page" />
      <DivWrapper id="home">
        {/* <TransitionGroup component={null}>
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
      </TransitionGroup> */}

        <TransitionGroup in={true} component={null}>
          <section>
            <div>
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
            </div>
            {isMounted &&
              leftContent.map((items: any, index: number) => (
                <CSSTransition
                  in={true}
                  key={index}
                  classNames="fade"
                  timeout={1000}
                >
                  <div style={{ transitionDelay: `${index + 1}00ms` }}>
                    {items}
                  </div>
                </CSSTransition>
              ))}
          </section>
        </TransitionGroup>
      </DivWrapper>
    </>
  )
}

export default LandingPage
