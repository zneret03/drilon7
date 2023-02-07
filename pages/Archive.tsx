import React, { useEffect } from "react"
import Layout from "@components/Layout"
import styled from "styled-components"
import { graphql } from "react-apollo"
import { filterProjects } from "@components/utils/GraphQuery"
import Icons from "@components/icons/Icons"
import AosInit from "@components/utils/aos"
import Link from "next/link"

const StyledArchive = styled.div`
  margin: -50px 90px;
  padding: 80px 50px 200px;

  @media (max-width: 1080px) {
    margin: -50px 90px;
    padding: 45px 50px 200px;
  }

  @media (max-width: 768px) {
    margin: 35px 0px;
    padding: 45px 50px 80px;
  }

  @media (max-width: 480px) {
    margin: 20px 0px;
    padding: 45px 50px 80px;
  }

  header {
    padding: 0 25px 60px;

    @media (max-width: 768px) {
      padding: 0 14px 30px;
    }
  }

  h2 {
    margin: 0 0 20px;
  }

  table {
    width: 100%;
    border-collapse: collapse;

    .hide-on-mobile {
      @media (max-width: 768px) {
        display: none;
      }
    }

    tbody tr {
      &:hover,
      &:focus {
        background-color: var(--light-navy);
      }
    }

    th,
    td {
      padding: 10px 25px;
      text-align: left;

      @media (max-width: 768px) {
        padding: 10px;
      }

      &:first-child {
        padding-left: 20px;
        @media (max-width: 768px) {
          padding-left: 10px;
        }
      }

      &:last-child {
        padding-right: 20px;
        @media (max-width: 768px) {
          padding-right: 10px;
        }
      }

      svg {
        fill: var(--light-slate);
        width: 25px;
        height: 25px;
        margin-left: 10px;

        &:hover {
          fill: var(--green);
        }
      }
    }

    tr {
      cursor: default;

      td:first-child {
        border-top-left-radius: var(--border-radius);
        border-bottom-left-radius: var(--border-radius);
      }
      td:last-child {
        border-top-right-radius: var(--border-radius);
        border-bottom-right-radius: var(--border-radius);
      }
    }

    td {
      &.year {
        padding-right: 20px;
        font-family: var(--font-mono);
        color: var(--green);

        @media (max-width: 768px) {
          padding-right: 10px;
          font-size: var(--fz-sm);
        }
      }

      &.title {
        padding-top: 15px;
        padding-right: 20px;
        color: var(--lightest-slate);
        font-size: var(--fz-xl);
        font-weight: 600;
        line-height: 1.25;
      }

      &.company {
        font-size: 15px;
        white-space: nowrap;
      }

      &.tech {
        font-size: var(--fz-xxs);
        font-family: var(--font-mono);
        line-height: 1.5;

        .separator {
          margin: 0 5px;
        }

        span {
          display: inline-block;
        }
      }

      &.links {
        min-width: 100px;

        .links-flex {
          display: flex;
          align-items: center;
        }
      }
    }
  }
`

interface PropTypes {
  data: any
}

const Archive: React.FC<PropTypes> = ({ data }) => {
  const { projects } = data
  useEffect(AosInit, [])

  return (
    <Layout>
      <div className="container">
        <StyledArchive>
          <header>
            <h2 className="big-heading">Archive</h2>
            <p className="subtitle">A big list of things I’ve worked on</p>
          </header>
          <div>
            <table>
              <thead>
                <th>Year</th>
                <th>Title</th>
                <th className="hide-on-mobile">Made at</th>
                <th className="hide-on-mobile">Built with</th>
                <th colSpan={2}>Link</th>
              </thead>
              <tbody>
                {projects &&
                  projects.map((info: any) => (
                    <tr key={info.id} data-aos="fade-up">
                      <td className="overline year">{info.year}</td>
                      <td className="title">{info.projectName}</td>
                      <td className="company hide-on-mobile">
                        {info.projectMadeAt ? (
                          <span>{info.projectMadeAt}</span>
                        ) : (
                          <span>—</span>
                        )}
                      </td>

                      <td className="tech hide-on-mobile">
                        {info.projectTechnology.projectTechnology.map(
                          (tech: any, index: number) => (
                            <span key={index}>
                              {tech}
                              {index !== tech.length && (
                                <span className="separator">&middot;</span>
                              )}
                            </span>
                          )
                        )}
                      </td>

                      <td className="links">
                        <div className="links-flex">
                          {info.demo && (
                            <Link href={info.demo}>
                              <a aria-label="External Link">
                                <Icons name="External" />
                              </a>
                            </Link>
                          )}
                          {info.source && (
                            <Link href={info.source}>
                              <a aria-label="Github Link">
                                <Icons name="Github" />
                              </a>
                            </Link>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </StyledArchive>
      </div>
    </Layout>
  )
}

export default graphql<PropTypes>(filterProjects)(Archive)
