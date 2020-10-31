import React from "react";
import LandingPage from "../components/LandingPage";
import { GlobalStyle } from "../css/index";
import styled from "styled-components";

const Div = styled.div`
  padding: 45px 60px;
`;

const index: React.FC = () => {
  return (
    <>
      <Div>
        <GlobalStyle />
        <LandingPage />
      </Div>
    </>
  );
};

export default index;
