import { gql } from "apollo-boost";

const getProjects = gql`
  {
    projects {
      id
      projectName
      projectMadeAt
      projectTitle
      demo
      source
      projectDescription
      slug
      projectTechnology
      year
    }
  }
`;

const filterProjects = gql`
  {
    projects {
      year
      projectName
      projectMadeAt
      projectTechnology
      demo
      source
    }
  }
`;

export { getProjects, filterProjects };
