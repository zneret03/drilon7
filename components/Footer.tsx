import React from "react";
import styled from "styled-components";
import Icons from "./icons/Icons";

const SyledFooterSection = styled.div`
  position: relative;
  padding: 0;
  margin: 0 auto;
  max-width: 1400px;

  #curvedLeft {
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: -1;

    @media (max-width: 768px) {
      display: none;
    }
  }
`;

const StyledCredits = styled.div`
  font-family: var(--font-mono);
  font-size: var(--fz-xs);
  padding: 20px;
  margin: 0 auto;
  max-width: 300px;
  display: flex;
  justify-content: center;

  .title {
    margin: 5px 0;
  }

  .github-icons {
    display: inline-flex;
    margin: 0 15px;

    span {
      display: flex;
      align-items: center;
      margin-right: 5px;
    }

    svg {
      margin: 0 5px;
      width: auto;
      height: 18px;
    }
  }
`;

const Footer: React.FC = () => {
  return (
    <SyledFooterSection>
      <div>
        <Icons name="CurveLeft" />
      </div>

      <StyledCredits>
        <a href="">
          <div className="title">Designed &amp; Built By Ian Drilon</div>
          <div className="github-icons">
            <span>
              <Icons name="Star" />
              <span>2,506</span>
            </span>
            <span>
              <Icons name="Fork" />
              <span>1,503</span>
            </span>
          </div>
        </a>
      </StyledCredits>
    </SyledFooterSection>
  );
};

export default Footer;
