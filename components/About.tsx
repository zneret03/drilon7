import React, { useEffect } from "react";
import styled from "styled-components";
import Image from "next/image";
import AosInit from "./utils/aos";

const StyledAboutSection = styled.section`
  max-width: 900px;

  @media (max-width: 1080px) {
    padding: 0 90px;
  }

  @media (max-width: 768px) {
    padding: 0 60px;
  }

  @media (max-width: 492px) {
    padding: 0 30px;
  }

  .inner {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 50px;

    @media (max-width: 768px) {
      display: block;
      position: relative;
    }
  }
`;

const StyledText = styled.div`
  ul.skills-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
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
        font-size: var(--fz-sm);
        line-height: 12px;
      }
    }
  }
`;

const StyledPic = styled.div`
  position: relative;
  max-width: 300px;

  @media (max-width: 768px) {
    margin: 50px auto 0px;
    width: 70%;
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
        left: 15px;
      }
      .img {
        filter: none;
        mix-blend-mode: normal;
      }
    }

    .img {
      position: relative;
      border-radius: var(--border-radius);
      mix-blend-mode: multiply;
      filter: grayscale(100%) contrast(1);
      transition: var(--transition);
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
      left: 20px;
      z-index: -1;
    }
  }
`;

const About = () => {
  const skills = [
    "JavaScript (ES6+)",
    "HTML & Css3",
    "Node.js",
    "React",
    "Netlify",
    "Firebase",
  ];

  useEffect(AosInit, []);

  return (
    <StyledAboutSection data-aos="fade-up" id="about">
      <h2 className="numbered-heading">About Me</h2>
      <div className="inner">
        <StyledText>
          <div>
            <p>
              Hi! There, Ian A. Drilon a student of Iloilo Science and
              Technology University,{" "}
              <a href="https://www.isatu.edu.ph/">(ISATU)</a>
            </p>

            <p>
              I enjoy creating things that resides in the internet, whether that
              be websites, applications, or any in between. My goal is always
              building a scalable, user friendly and pixel-perfect website with
              performant experience.
            </p>

            <p>Here is some technology that i’ve been working recently:</p>
          </div>

          <ul className="skills-list">
            {skills && skills.map((skill, i) => <li key={i}>{skill}</li>)}
          </ul>
        </StyledText>
        <StyledPic>
          <div className="wrapper">
            <Image
              src={"/image/image.png"}
              alt="Picture of the author"
              width={500}
              height={500}
            />
          </div>
        </StyledPic>
      </div>
    </StyledAboutSection>
  );
};

export default About;
