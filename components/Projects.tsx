import React, { useEffect, useRef } from "react"
import styled from "styled-components"
import Theme from "@css/CssVariables"
import Icons from "@components/icons/Icons"
import {
  useToggle,
  useAnimationScroll,
  usePrefersReducedMotion,
} from "@hooks/index"
import Link from "next/link"

const StyledProjectsSection = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 170px 30px;

  @media (max-width: 768px) {
    padding: 80px 60px;
  }

  @media (max-width: 492px) {
    padding: 10px 30px;
  }

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
    cursor: pointer;
    font-family: var(--font-mono);
    font-size: var(--fz-sm);
    color: var(--green);

    &:after {
      bottom: 0.1em;
    }
  }

  .project-grid {
    ${Theme.grid}
    position: relative;
    margin-top: 50px;

    @media (max-width: 1080px) {
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    }
  }

  .more-button {
    margin: 80px auto 0;

    a {
      color: var(--green);
    }
  }
`

const StyledProject = styled.div`
  ${Theme.boxShadow}
  cursor: default;
  transition: var(--transition);
  width: 100%;

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
    height: 300px;
    padding: 2rem 1.75rem;
    border-radius: var(--border-radius);
    background-color: var(--light-navy);
    transition: var(--transition);

    &:hover {
      .project-title {
        color: var(--green);
      }
    }

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
      display: -webkit-box;
      font-size: 16px;
      max-width: 4 00px;
      -webkit-line-clamp: 4;
      -webkit-box-orient: vertical;
      overflow: hidden;

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
`

const Projects = ({ projects }): JSX.Element => {
  const revealTitle = useRef(null)
  const revealSubTitle = useRef(null)
  const revealProjects = useRef([])
  const revealButton = useRef(null)

  const title = useAnimationScroll(revealSubTitle)
  const subTitle = useAnimationScroll(revealSubTitle)
  const gitProjects = useAnimationScroll(revealProjects)
  const showButton = useAnimationScroll(revealButton)

  const prefersReducedMotion = usePrefersReducedMotion()

  const project = projects
  const GRID_LIMIT: number = 6
  const [isShow, isToggle] = useToggle()
  const firstSix: Object[] = project && project.slice(0, GRID_LIMIT)
  const projectsData = isShow ? project : firstSix

  useEffect(() => {
    const scrollReveal = async () => {
      if (prefersReducedMotion) {
        return
      }

      await Promise.allSettled([
        title(),
        subTitle(),
        gitProjects(),
        showButton(),
      ])
    }

    scrollReveal()
  }, [])

  return (
    <>
      <StyledProjectsSection id="project">
        <div className="heading">
          <h2 className="numbered-heading" ref={revealTitle}>
            Other Noteworthy Projects
          </h2>
          <span className="archive-link link" ref={revealSubTitle}>
            explore more
          </span>
        </div>
        {projects.length <= 0 ? (
          <div className="loading">Please Wait...</div>
        ) : (
          <div className="project-grid">
            {projectsData &&
              projectsData.map((info: any, index: number) => (
                <StyledProject
                  key={index}
                  ref={(el) => (revealProjects.current[index] = el)}
                >
                  <div className="project-inner">
                    <header>
                      <div className="project-top">
                        <div className="folder">
                          <Icons name="Folder" />
                        </div>

                        <div className="project-links">
                          {info.source && (
                            <Link href={info.source}>
                              <a aria-label="Github Link" target="_blank">
                                <Icons name="Github" />
                              </a>
                            </Link>
                          )}
                          {info.demo && (
                            <Link href={info.demo}>
                              <a aria-label="External Link" target="_blank">
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
                        {info.projectTechnology.projectTechnology.map(
                          (tech: any, index: number) => (
                            <li key={index}>{tech}</li>
                          )
                        )}
                      </ul>
                    </footer>
                  </div>
                </StyledProject>
              ))}
          </div>
        )}

        <button className="more-button" onClick={isToggle}>
          <a>Show {isShow ? "less" : "more"}</a>
        </button>
      </StyledProjectsSection>
    </>
  )
}

export default Projects
