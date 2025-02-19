import React, { useEffect, useRef } from "react"
import { SEO } from "@components"
import styled, { keyframes } from "styled-components"
import Image from "next/image"
import Icons from "@components/icons/Icons"
import { usePrefersReducedMotion, useAnimationScroll } from "@hooks/index"

const pulse = keyframes`
  0% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 rgba(134, 144, 176, 0.7);
  }

  70% {
    transform: scale(1);
    box-shadow: 0 0 0 10px rgba(134, 144, 176, 0);
  }

  100% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 rgba(134, 144, 176, 0);
  }
`

const ArrowDownStyled = styled.div`
  position: relative;
  display: block;
  cursor: pointer;
  width: 100px;
  height: 100px;
  margin: 0 auto;
  transform: translateY(-14px);
  z-index: 2;

  @media (max-width: 1100px) {
    display: none;
  }

  svg {
    border-radius: 50%;
    box-shadow: 0 0 0 0 rgba(134, 144, 176, 1);
    transform: scale(1);
    animation: ${pulse} infinite 2s linear;
  }
`

const StyledAboutSection = styled.section`
  max-width: 900px;

  padding: 150px 90px;

  @media (max-width: 1080px) {
    padding: 0px 90px;
  }

  @media (max-width: 768px) {
    padding: 0px 60px;
  }

  @media (max-width: 492px) {
    padding: 0px 30px;
  }

  .inner {
    display: grid;
    align-items: center;
    grid-template-columns: 2fr 3fr;
    grid-gap: 50px;

    @media (max-width: 768px) {
      display: block;
      position: relative;
    }
  }
`

const StyledText = styled.div`
  ul.skills-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    align-items: center;
    padding: 0;
    margin: 19px 0 0 0;
    overflow: hidden;
    list-style: none;

    li {
      position: relative;
      margin-bottom: 10px;
      padding-left: 20px;
      font-family: var(--font-mono);
      font-size: var(--fz-xs);

      &:before {
        content: "▹";
        position: absolute;
        left: 0;
        color: var(--green);
        font-size: var(--fz-md);
        line-height: 18px;
      }
    }
  }
`

const StyledPic = styled.div`
  position: relative;
  max-width: 300px;

  @media (max-width: 768px) {
    margin: 50px auto 100px;
    width: 70%;
  }

  @media (max-width: 480px) {
    margin: 0px auto 100px;
  }

  .wrapper {
    display: block;
    position: relative;
    width: 100%;
    border-radius: var(--border-radius);
    background-color: var(--green);
    -webkit-filter: var(--webkit-filter); /* Safari 6.0 - 9.0 */
    filter: var(--filter);

    &:hover,
    &:focus {
      background: transparent;
      outline: 0;
      -webkit-filter: var(--webkit-filter-colored); /* Safari 6.0 - 9.0 */
      filter: var(--filter-colored);

      &:after {
        top: 15px;
        right: 15px;
      }

      .img {
        filter: none;
        mix-blend-mode: normal;
      }
    }

    .img {
      position: relative;
      border-radius: var(--border-radius);
      transition: var(--transition);
    object-fit: cover;
    }

    &:before,
    &:after {
      content: "";
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: var(--border-radius);
      transition: var(--transition);
    }

    &:before {
      top: 0;
      left: 0;
      background-color: var(--navy);
      mix-blend-mode: screen;
    }

    &:after {
      border: 2px solid var(--green);
      top: 20px;
      right: 20px;
      z-index: -1;
    }
  }
`

const About = () => {
  const revealContainer = useRef(null)
  const prefersReducedMotion = usePrefersReducedMotion()
  const animate = useAnimationScroll(revealContainer)

  useEffect(() => {
    if (prefersReducedMotion) {
      return
    }

    if (revealContainer) {
      animate()
    }
  }, [])

  const skills = [
    "Elixir Phoenix",
    "GraphQL",
    "AWS",
    "React",
    "Next.js",
    "Firebase",
  ]

  return (
    <>
      <SEO title="Ian Drilon" content="About Page" />

      <ArrowDownStyled className="arrow-container">
        <a href="#about">
          <Icons name="ArrowDown" />
        </a>
        <div className="circle" />
      </ArrowDownStyled>

      <StyledAboutSection id="about" ref={revealContainer}>
        <div className="inner">
          <StyledPic>
            <div className="wrapper">
              <Image
                className="img"
                src={"/image/about-me.jpg"}
                alt="Picture of the author"
                width={500}
                height={500}
              />
            </div>
          </StyledPic>
          <StyledText>
            <h2 className="numbered-heading">Who's Ian?</h2>
            <div>
              <p>
                Hi! There, I'm Ian A. Drilon Graduated in Iloilo Science and
                Technology University
                <a
                  className="link"
                  href="https://www.isatu.edu.ph/"
                  target="_blank"
                >
                  (ISATU)
                </a>
              </p>

              <p>
                Currently software developer of 
                <a className="link" href="https://www.mashupgarage.com/" target="_blank">
                  Mashup garage
                </a> 
              </p>

              <p>
                and working closely to 
                <a className="link" href="https://www.horizonquantum.com/" target="_blank">
                Horizon Quantum 
                </a>
              </p>

              <p>
                I Enjoy creating things that resides in the internet. whether
                that be websites, applications, or any in between. My goal is
                always building a scalable, user friendly and pixel-perfect
                website with performant experience and developing a backend using elixir phoenix.
              </p>

              <p>Here is some technology that i’ve been working recently:</p>
            </div>

            <ul className="skills-list">
              {skills && skills.map((skill, i) => <li key={i}>{skill}</li>)}
            </ul>
          </StyledText>
        </div>
      </StyledAboutSection>
    </>
  )
}

export default About
