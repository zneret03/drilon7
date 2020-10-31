import React from "react";
import LandingPage from "../components/LandingPage";
import { GlobalStyle } from "../css/index";

const index: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <LandingPage />
    </>
  );
};

export default index;
