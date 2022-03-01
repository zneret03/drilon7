import React, { useEffect } from "react";
import Link from 'next/link'
import styled from "styled-components";
import AosInit from "./utils/aos";

const StyledContactSection = styled.section`
  max-width: 480px;
  margin: 0 auto;
  text-align: center;

  @media (max-width: 768px) {
    margin: 0 auto 100px;
    padding: 0 10px;
  }

  @media (max-width: 480px) {
    margin: 0 auto 60px;
    padding: 0 25px;
  }

  .overline {
    display: block;
    margin-bottom: 20px;
    color: var(--green);
    font-family: var(--font-mono);
    font-size: var(--fz-lg);
    font-weight: normal;

    &:before {
      bottom: 0;
      font-size: var(--fz-sm);
    }

    &:after {
      display: none;
    }
  }

  p {
    line-height: 25px;
  }

  .title {
    margin: 15px 0;
    font-size: clamp(40px, 5vw, 60px);

    @-moz-document url-prefix() {
      font-size: 40px;

      @media (max-width: 1080px) {
        font-size: 40px;
      }

      @media (max-width: 768px) {
        font-size: 35px;
      }
    }
  }

  .button {
    margin: 35px 0;
  }
`;

const Contact: React.FC = () => {
  const contact = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();

    //const googleEmail = "https://mail.google.com/mail/u/0/?view=cm&fs=1&to=iandrilon2@gmail.com&tf=1"
    const typeFormRedirect = "TypeForm"
    window.open(typeFormRedirect);
  };

  useEffect(AosInit, []);
  return (
    <StyledContactSection data-aos="fade-up" id="contact">
      <h2 className="numbered-heading overline">What's Next?</h2>
      <h2 className="title">Get In Touch</h2>

      <div>
        <p>
          If you have project in mind, why not we get in touch. Lets work
          together. Im available for interesting freelance work. Big or small.
        </p>
      </div>

      <button
        type="button"
        onClick={(event) => contact(event)}
        className="button"
      >
        Say Hello
      </button>
    </StyledContactSection>
  );
};

export default Contact;
