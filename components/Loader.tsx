import React from "react";
import Icons from "./icons/Icons";
import styled from "styled-components";
import LogoAnimation from "@css/LogoAnimation";

const StyledLogo = styled.div`
  width: 100%;
  height: 100vh;
  background-color: var(--dark-navy);

  .logo-wrapper {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  svg {
    width: 500px;
    height: 500px;

    @media (max-width: 1080px) {
      width: 500px;
      height: 500px;
    }

    @media (max-width: 768px) {
      width: 400px;
      height: 400px;
    }

    @media (max-width: 480px) {
      width: 300px;
      height: 300px;
    }
  }

  ${LogoAnimation};
`;

const Loader: React.FC = () => {
  return (
    <StyledLogo>
      <div className="logo-wrapper">
        {" "}
        <Icons name="Logo" />{" "}
      </div>
    </StyledLogo>
  );
};

export default Loader;
