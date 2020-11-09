import React from "react";
import {
  LandingPage,
  About,
  Work,
  Projects,
  Contact,
  Footer,
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
      <Footer />
    </Layout>
  );
};

export default Home;
