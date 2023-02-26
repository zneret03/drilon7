import React, { useEffect, useRef } from "react"
import styled from "styled-components"
import Theme from "@css/CssVariables"
import { usePrefersReducedMotion, useAnimationScroll } from "@hooks/index"

const CertificatesContainer = styled.section`
  line-height: 1.6rem;

  .card-certificates-wrapper {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-gap: 15px;
    margin-top: 30px;

    .card-certificates {
      ${Theme.boxShadow}
      border: 1px solid var(--lightest-navy);
      border-radius: var(--border-radius);
      padding: 20px;

      .certificate-subtitle {
        font-size: var(--fz-md);
        margin: 2px 0 0;
      }

      .redirect-btn {
        cursor: pointer;
        font-size: var(--fz-md);
        font-weight: 500;

        &::after {
          display: inline-block;
          content: "\\2192";
          padding: 0 10px;
          font-size: 16px;
          transition: var(--transition);
        }

        &:hover {
          color: var(--green);

          &::after {
            transform: translateX(10px);
          }
        }
      }

      h4 {
        margin: 0;
      }
    }
  }

  .subtitle {
    margin: 0;
  }
`

export default function Certificates({ certificates }): JSX.Element {
  const revealContainer = useRef(null)
  const revealCertificates = useRef([])

  const container = useAnimationScroll(revealContainer)
  const certificate = useAnimationScroll(revealCertificates)

  const preferReducedMotion = usePrefersReducedMotion()

  useEffect(() => {
    const scrollReveal = async () => {
      if (preferReducedMotion) {
        return
      }

      await Promise.allSettled([container(), certificate()])
    }

    scrollReveal()
  }, [])

  return (
    <CertificatesContainer id="certificate">
      <div ref={container}>
        <h2 className="numbered-heading">My Certificates</h2>
        <span className="sub-title">some of my certificates</span>
      </div>

      {certificates.length <= 0 ? (
        <div className="loading">Please Wait...</div>
      ) : (
        <div className="card-certificates-wrapper">
          {certificates?.map((type: any, index: number) => {
            return (
              <div
                className="card-certificates"
                key={index}
                ref={(el) => (revealCertificates.current[index] = el)}
              >
                <h4>{type.title}</h4>
                <div className="certificate-subtitle">{type.subtitle}</div>
                <a
                  href={type.source}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="redirect-btn"
                >
                  <span>View Certificate</span>
                </a>
              </div>
            )
          })}
        </div>
      )}
    </CertificatesContainer>
  )
}
