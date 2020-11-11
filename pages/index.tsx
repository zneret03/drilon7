import React from "react";
import {
  LandingPage,
  About,
  Work,
  Projects,
  Contact,
} from "../components/Index";
import Layout from "../components/Layout";

const Home: React.FC = () => {
  return (
    <Layout>
      <LandingPage />
      <About />
      <Work />
      <Projects />
      <Contact />
    </Layout>
  );
};

export default Home;
