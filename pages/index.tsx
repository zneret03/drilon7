import React from "react";
import { GlobalStyle } from "../css/index";
import styled from "styled-components";
import { LandingPage, About } from "../components/Index";

const index: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <LandingPage />
      <About />
    </>
  );
};

export default index;
