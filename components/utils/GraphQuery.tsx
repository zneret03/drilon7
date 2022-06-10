import { gql } from "apollo-boost";

const getData = gql`
  {
    certificates {
      title
      subtitle
      source
    }
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

export { getData, filterProjects };
