import React from "react";
import Social from "./Social";
import { socialMedia } from "./config";
import styled from "styled-components";

const CurveSvg = styled.svg`
  position: absolute;
  top: 0;
  right: 0;
`;

const SectionWrapper = styled.section`
  padding: 40px 100px;
  color: #dbcfcf;
  line-height: 9;

  h3 {
    font-family: var(--font-mono);
    margin: 0px 0px 15px 4px;
    font-size: 20px;
    font-weight: normal;
    color: #fff;
  }

  h2 {
    font-family: var(--font-sans);
    font-size: clamp(40px, 5vw, 80px);
    font-weight: 600px;
    letter-spacing: 2px;
  }

  h2:nth-child(2) {
    color: var(--slate);
  }

  p {
    font-family: var(--font-sans);
    font-size: 20px;
    max-width: 430px;
    line-height: 27px;
    color: var(--slate);
  }
`;

const LandingPage = () => {
  const redirectEmail = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();

    window.location.href = "mailto:iandrilon2@gmail.com";
  };

  return (
    <div>
      <div>
        <CurveSvg
          width="579"
          height="575"
          viewBox="0 0 579 575"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M579 0H0.613831C19.1535 57.3041 60.1238 101.507 129.985 120.207C283.486 161.295 287.511 258.165 291.408 351.931C296.177 466.7 300.752 576.82 579 574.309V0Z"
            fill="#292F4F"
          />
        </CurveSvg>
      </div>
      <div>
        <div>
          <svg
            width="30"
            height="29"
            viewBox="0 0 30 29"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.5 7.24398C2.5 6.5794 3.0575 6.04169 3.74375 6.04169H13.7563C14.0861 6.04169 14.4025 6.16836 14.6357 6.39383C14.869 6.6193 15 6.92511 15 7.24398C15 7.56285 14.869 7.86865 14.6357 8.09413C14.4025 8.3196 14.0861 8.44627 13.7563 8.44627H3.74375C3.41389 8.44627 3.09753 8.3196 2.86429 8.09413C2.63104 7.86865 2.5 7.56285 2.5 7.24398Z"
              fill="#FFFAFA"
            />
            <path
              d="M2.5 14.5C2.5 13.8354 3.0575 13.2977 3.74375 13.2977H26.2563C26.5861 13.2977 26.9025 13.4244 27.1357 13.6499C27.369 13.8753 27.5 14.1812 27.5 14.5C27.5 14.8189 27.369 15.1247 27.1357 15.3502C26.9025 15.5756 26.5861 15.7023 26.2563 15.7023H3.74375C3.41389 15.7023 3.09753 15.5756 2.86429 15.3502C2.63104 15.1247 2.5 14.8189 2.5 14.5Z"
              fill="#FFFAFA"
            />
            <path
              d="M3.74375 20.5538C3.41389 20.5538 3.09753 20.6804 2.86429 20.9059C2.63104 21.1314 2.5 21.4372 2.5 21.7561C2.5 22.0749 2.63104 22.3807 2.86429 22.6062C3.09753 22.8317 3.41389 22.9584 3.74375 22.9584H18.7563C19.0861 22.9584 19.4025 22.8317 19.6357 22.6062C19.869 22.3807 20 22.0749 20 21.7561C20 21.4372 19.869 21.1314 19.6357 20.9059C19.4025 20.6804 19.0861 20.5538 18.7563 20.5538H3.74375Z"
              fill="#FFFAFA"
            />
          </svg>
        </div>
        {socialMedia && <Social socialMedia={socialMedia} />}
      </div>
      <SectionWrapper>
        <div>
          <h3>Hi, my name is</h3>
        </div>
        <div>
          <h2>Ian A. Drilon.</h2>
          <h2>I build things for web.</h2>
        </div>
        <div>
          <p>
            I’m a student of Iloilo Science and Technology University, taking a
            Bachelor of Science in Computer Science.
          </p>
        </div>
        <div>
          <button type="button" onClick={(event) => redirectEmail(event)}>
            Get In Touch
          </button>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default LandingPage;
