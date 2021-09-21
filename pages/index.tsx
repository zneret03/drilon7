import React from "react";
import {
  LandingPage,
  About,
  Work,
  Projects,
  Contact,
  Layout,
  WorkExperience,
} from "@components";
import { graphql } from "react-apollo";
import { dataTypes } from "@lib/types";
import { getProjects } from "@components/utils/GraphQuery";
import { workExperience } from "@data";

const Home = ({ data }) => {
  return (
    <Layout>
      <LandingPage />
      <About />
      <WorkExperience jobs={workExperience} />
      <Work />
      <Projects data={data} />
      <Contact />
    </Layout>
  );
};

export default graphql<dataTypes>(getProjects)(Home);
