import React from "react";
import { GithubProvider } from "../Context/GithubProvider";
import { LandingPage, About, Work, Contact, Footer } from "../components/Index";
import { GlobalStyle } from "../css";
import "aos/dist/aos.css";

const Home: React.FC = () => {
  return (
    <GithubProvider>
      <GlobalStyle />
      <LandingPage />
      <About />
      <Work />
      <Contact />
      <Footer />
    </GithubProvider>
  );
};

export default Home;
