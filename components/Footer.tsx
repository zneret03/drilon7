import React, { useContext } from "react";
import styled from "styled-components";
import Icons from "./icons/Icons";
import { GithubContext } from "@Context/GithubProvider";

const SyledFooterSection = styled.div`
  position: relative;
  padding: 0;
  margin: 0 auto;
  max-width: 1600px;

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
  line-height: 1.5;
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
  const { information }: any = useContext(GithubContext);

  return (
    <SyledFooterSection>
      <div>
        <Icons name="CurveLeft" />
      </div>

      <StyledCredits>
        <a href={information.html_url}>
          <div className="title">Built By Ian Adorable Drilon</div>
          {information.stargazers_count !== undefined &&
            information.forks !== undefined && (
              <div className="github-icons">
                <span>
                  <Icons name="Star" />
                  <span>{information.stargazers_count.toLocaleString()}</span>
                </span>
                <span>
                  <Icons name="Fork" />
                  <span>{information.forks.toLocaleString()}</span>
                </span>
              </div>
            )}
        </a>
      </StyledCredits>
    </SyledFooterSection>
  );
};

export default Footer;
