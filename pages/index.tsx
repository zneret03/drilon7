import React from "react";
import { GlobalStyle } from "../css/index";
import { LandingPage, About, Work } from "../components/Index";

const index: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <LandingPage />
      <About />
      <Work />
    </>
  );
};

export default index;
