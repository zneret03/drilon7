import React, { useEffect } from "react";
import Icons from "./icons/Icons";
import styled from "styled-components";
import AosInit from "./utils/aos";
import Link from "next/link";
import Image from "next/image";
import { projectInformation } from "./utils/config";

const StyleWorkSection = styled.section`
  @media (max-width: 1080px) {
    padding: 200px 90px;
  }

  @media (max-width: 768px) {
    padding: 180px 60px;
  }

  @media (max-width: 492px) {
    padding: 160px 30px;
  }
`;

const StyledProject = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(12, 1fr);
  align-items: center;
  padding: 50px 0 0 0;

  &:not(:last-of-type) {
    margin-bottom: 100px;
    @media (max-width: 768px) {
      margin-bottom: 70px;
    }
    @media (max-width: 480px) {
      margin-bottom: 30px;
    }
  }

  &:nth-of-type(odd) {
    .project-content {
      grid-column: 7 / -1;
      text-align: right;
      @media (max-width: 1080px) {
        grid-column: 5 / -1;
      }
      @media (max-width: 768px) {
        grid-column: 1 / -1;
        padding: 40px 40px 30px;
      }
      @media (max-width: 480px) {
        padding: 25px 25px 20px;
      }
    }

    .project-tech-list {
      justify-content: flex-end;
      li {
        margin: 0 0 5px 20px;
        @media (max-width: 768px) {
          margin: 0 0 5px 10px;
        }
      }
    }

    .project-links {
      justify-content: flex-end;
      margin-left: 0;
      margin-right: -10px;
    }

    .project-image {
      grid-column: 1 / 8;
      @media (max-width: 768px) {
        grid-column: 1 / -1;
      }
    }
  }

  .project-content {
    position: relative;
    grid-column: 1 / 7;
    grid-row: 1 / -1;
    @media (max-width: 1080px) {
      grid-column: 1 / 9;
    }

    @media (max-width: 768px) {
      grid-column: 1 / -1;
      padding: 40px 40px 30px;
      z-index: 5;
    }

    @media (max-width: 480px) {
      padding: 30px 25px 20px;
    }
  }

  .project-overline {
    margin: 10px 0;
    color: var(--green);
    font-family: var(--font-mono);
    font-size: var(--fz-xs);
    font-weight: 400;
  }

  .project-title {
    color: var(--lightest-slate);
    font-size: clamp(24px, 5vw, 28px);

    @media (min-width: 768px) {
      margin: 0 0 20px;
    }

    @media (max-width: 768px) {
      color: var(--white);
    }
  }

  .project-description {
    box-shadow: 0 10px 30px -15px var(--navy-shadow);
    transition: var(--transition);
    position: relative;
    z-index: 2;
    padding: 25px;
    border-radius: var(--border-radius);
    background-color: var(--light-navy);
    color: var(--light-slate);
    font-size: var(--fz-lg);

    &:hover,
    &:focus {
      box-shadow: 0 20px 30px -15px var(--navy-shadow);
    }

    @media (max-width: 768px) {
      padding: 20px 0;
      background-color: transparent;
      box-shadow: none;
      &:hover {
        box-shadow: none;
      }
    }

    a {
      display: inline-block;
      text-decoration: none;
      text-decoration-skip-ink: auto;
      position: relative;
      transition: var(--transition);
      cursor: pointer;
      color: var(--green);
      &:hover,
      &:focus,
      &:active {
        color: var(--green);
        outline: 0;
        &:after {
          width: 100%;
        }

        & > * {
          color: var(--green) !important;
          transition: var(--transition);
        }
      }

      &:after {
        content: "";
        display: block;
        width: 0;
        height: 1px;
        position: relative;
        bottom: 0.37em;
        background-color: var(--green);
        transition: var(--transition);
        opacity: 0.5;
      }
    }
  }

  .project-tech-list {
    display: flex;
    flex-wrap: wrap;
    position: relative;
    z-index: 2;
    margin: 25px 0 10px;
    padding: 0;
    list-style: none;

    li {
      margin: 0 20px 5px 0;
      color: var(--light-slate);
      font-family: var(--font-mono);
      font-size: var(--fz-xs);
      white-space: nowrap;
    }

    @media (max-width: 768px) {
      margin: 10px 0;
      li {
        margin: 0 10px 5px 0;
        color: var(--lightest-slate);
      }
    }
  }

  .project-links {
    display: flex;
    align-items: center;
    position: relative;
    margin-top: 10px;
    margin-left: -10px;

    a {
      padding: 10px;
      svg {
        width: 22px;
        height: 22px;
        fill: var(--light-slate);

        &:hover,
        &:focus {
          fill: var(--green);
        }
      }
    }
  }

  .project-image {
    box-shadow: 0 10px 30px -15px var(--navy-shadow);
    transition: var(--transition);
    grid-column: 6 / -1;
    grid-row: 1 / -1;
    position: relative;
    z-index: 1;

    &:hover,
    &:focus {
      box-shadow: 0 20px 30px -15px var(--navy-shadow);
    }

    @media (max-width: 768px) {
      grid-column: 1 / -1;
      height: 100%;
      opacity: 0.25;
    }

    a {
      z-index: 1;
      width: 100%;
      background-color: var(--green);
      border-radius: var(--border-radius);
      vertical-align: middle;
      &:hover,
      &:focus {
        background: transparent;
        &:before,
        .img {
          background: transparent;
          filter: none;
        }
      }

      &:before {
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 3;
        transition: var(--transition);
        background-color: var(--navy);
        mix-blend-mode: screen;
      }
    }

    .img {
      position: relative;
      object-fit: fill;
      width: 100%;
      height: 100%;
      border-radius: var(--border-radius);
      mix-blend-mode: multiply;
      filter: grayscale(100%) contrast(1) brightness(90%);

      @media (max-width: 768px) {
        width: 100%;
        height: auto;
        bject-fit: cover;
        filter: grayscale(100%) contrast(1) brightness(80%);
      }
    }
  }
`;

const Work: React.FC = () => {
  useEffect(AosInit, []);

  return (
    <StyleWorkSection id="work">
      <h2 className="numbered-heading">Some Things I've Built</h2>
      {projectInformation.map((project: any, index: number) => (
        <StyledProject key={index} data-aos="fade-up">
          <div className="project-content">
            <p className="project-overline">{project.feature}</p>
            <h3 className="project-title">{project.title}</h3>
            <div
              className="project-description"
              dangerouslySetInnerHTML={{ __html: project.description }}
            />

            <ul className="project-tech-list">
              {project.technology.map((tech: any, index: number) => (
                <li key={index}>{tech}</li>
              ))}
            </ul>

            <div className="project-links">
              <Link href={project.source}>
                <a>
                  <Icons name={"Github"} />
                </a>
              </Link>
              <Link href={project.demo}>
                <a>
                  <Icons name={"External"} />
                </a>
              </Link>
            </div>
          </div>

          <div className="project-image">
            <Link href={project.demo}>
              <a>
                <img src={`/image/${project.image}`} className="img" alt="" />
              </a>
            </Link>
          </div>
        </StyledProject>
      ))}
    </StyleWorkSection>
  );
};

export default Work;
