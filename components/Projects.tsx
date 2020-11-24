import React, { useEffect } from "react";
import styled from "styled-components";
import { OtherProjects } from "./utils/config";
import AosInit from "./utils/aos";
import Theme from "../css/CssVariables";
import Icons from "./icons/Icons";
import Link from "next/link";

const StyledProjectsSection = styled.section`
  display: flex;
  flex-direction: column;

  .heading {
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  h2 {
    font-size: clamp(24px, 5vw, var(--fz-heading));
  }

  .archive-link {
    font-family: var(--font-mono);
    font-size: var(--fz-sm);
    color: var(--green);

    &:after {
      bottom: 0.1em;
    }
  }

  .project-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-gap: 15px;
    position: relative;
    margin-top: 50px;

    @media (max-width: 1080px) {
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    }
  }

  .more-button {
    margin: 80px auto 0;
  }

  /* @media (max-width: 1080px) {
    padding: 100px 90px;
  }

  @media (max-width: 768px) {
    padding: 80px 60px;
  }

  @media (max-width: 492px) {
    padding: 70px 30px;
  } */
`;

const StyledProject = styled.div`
  cursor: default;
  transition: var(--transition);

  &:hover,
  &:focus {
    outline: 0;
    .project-inner {
      transform: translateY(-5px);
    }
  }

  .project-inner {
    box-shadow: 0 10px 30px -15px var(--navy-shadow);
    transition: var(--transition);
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    align-items: flex-start;
    position: relative;
    height: 100%;
    padding: 2rem 1.75rem;
    border-radius: var(--border-radius);
    background-color: var(--light-navy);
    transition: var(--transition);

    .project-top {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 30px;
    }

    .folder {
      svg {
        fill: var(--green);
        width: 40px;
        height: 40px;
      }
    }

    .project-links {
      margin-right: -10px;

      a {
        padding: 5px 10px;

        svg {
          fill: var(--light-slate);
          width: 25px;
          height: 25px;

          &:hover,
          &:focus {
            fill: var(--green);
          }
        }
      }
    }

    .project-title {
      margin: 0 0 10px;
      color: var(--lightest-slate);
      font-size: var(--fz-xxl);
    }

    .project-description {
      color: var(--light-slate);
      font-size: 16px;
      text-overflow: ellipsis;

      a {
        ${Theme.inlineLink}
      }
    }

    .project-tech-list {
      display: flex;
      align-items: flex-end;
      flex-grow: 1;
      flex-wrap: wrap;
      padding: 0;
      margin: 30px 0 0 0;
      list-style: none;
      li {
        font-family: var(--font-mono);
        font-size: var(--fz-xxs);
        line-height: 1.75;
        &:not(:last-of-type) {
          margin-right: 15px;
        }
      }
    }
  }
`;

const Projects: React.FC = () => {
  const GRID_LIMIT = 6;
  const firstSix = OtherProjects.slice(0, GRID_LIMIT);

  useEffect(AosInit, []);

  return (
    <StyledProjectsSection id="project">
      <div className="heading">
        <h2 className="numbered-heading">Other Noteworthy Projects</h2>

        <span className="archive-link link">Other Projects</span>
      </div>
      <div className="project-grid">
        {firstSix &&
          firstSix.map((info: any) => (
            <StyledProject key={info.id} data-aos="fade-up">
              {console.log(info)}
              <div className="project-inner">
                <header>
                  <div className="project-top">
                    <div className="folder">
                      <Icons name="Folder" />
                    </div>

                    <div className="project-links">
                      {info.source && (
                        <Link href={info.source}>
                          <a aria-label="Github Link">
                            <Icons name="Github" />
                          </a>
                        </Link>
                      )}
                      {info.demo && (
                        <Link href={info.demo}>
                          <a aria-label="External Link">
                            <Icons name="External" />
                          </a>
                        </Link>
                      )}
                    </div>
                  </div>

                  <h3 className="project-title">{info.projectTitle}</h3>

                  <div
                    className="project-description"
                    dangerouslySetInnerHTML={{
                      __html: info.projectDescription,
                    }}
                  />
                </header>

                <footer>
                  <ul className="project-tech-list">
                    {info.projectTechnology.map((tech: any, index: number) => (
                      <li key={index}>{tech}</li>
                    ))}
                  </ul>
                </footer>
              </div>
            </StyledProject>
          ))}
      </div>
      <button className="more-button" data-aos="fade-up">
        <Link href="Archive">Show Archive</Link>
      </button>
    </StyledProjectsSection>
  );
};

export default Projects;
