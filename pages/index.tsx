import React from "react";
import { LandingPage, About, Work, Contact, Footer } from "../components/Index";
import { GlobalStyle } from "../css";

const Home: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <LandingPage />
      <About />
      <Work />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
