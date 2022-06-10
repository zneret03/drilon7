import React from "react";
import {
  LandingPage,
  Certificates,
  About,
  Work,
  Projects,
  Contact,
  Layout,
  WorkExperience,
} from "@components";
import { graphql } from "react-apollo";
import { dataTypes } from "@lib/types";
import { getData } from "@components/utils/GraphQuery";
import { workExperience } from "@data";

const Home = ({ data }) => {
  return (
    <Layout>
      <LandingPage />
      <About />
      <Work />
      <Projects data={data} />
      <WorkExperience jobs={workExperience} />
      <Certificates data={data} />
      <Contact />
    </Layout>
  );
};

export default graphql<dataTypes>(getData)(Home);
