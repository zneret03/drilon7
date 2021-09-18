import React from "react";
import {
  LandingPage,
  About,
  Work,
  Projects,
  Contact,
  Layout,
} from "@components";

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
