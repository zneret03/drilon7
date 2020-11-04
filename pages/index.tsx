import React from "react";
import { LandingPage, About, Work } from "../components/Index";
import { GlobalStyle } from "../css";

const Home: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <LandingPage />
      <About />
      <Work />
    </>
  );
};

export default Home;
