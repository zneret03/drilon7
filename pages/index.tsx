import React from "react";
import LandingPage from "../components/LandingPage";
import { GlobalStyle } from "../css/index";
import styled from "styled-components";

const DivWrapper = styled.div`
  padding: 45px 60px;
`;

const index: React.FC = () => {
  return (
    <>
      <DivWrapper>
        <GlobalStyle />
        <LandingPage />
      </DivWrapper>
    </>
  );
};

export default index;
