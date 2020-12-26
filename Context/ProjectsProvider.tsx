import React, { createContext, useState, useEffect } from "react";

interface IContext {
  projects: Object[];
  error: Object;
}

interface PropTypes {
  children: React.ReactNode;
}

const ProjectsContext = createContext({} as IContext);

const ProjectsProvider: React.FC<PropTypes> = ({ children }) => {
  const [projects, setProjects] = useState([]);
  const [error, setError] = useState({ active: false, type: 200 });

  const API_ENDPONT = "https://strapi-drilon7.herokuapp.com/projects";

  const fetchProjects = () => {
    (async () => {
      await fetch(API_ENDPONT)
        .then((response: any) => {
          if (response.status === 404) {
            setError({ active: true, type: 404 });
          }

          if (response.status === 403) {
            setError({ active: true, type: 403 });
          }

          return response.json();
        })
        .then((projectsData: any) => {
          setProjects(projectsData);
        })
        .catch((error: any) => {
          setError({ active: true, type: 400 });
          console.log("Error", error.message);
        });
    })();
  };

  useEffect(fetchProjects, []);

  return (
    <ProjectsContext.Provider value={{ projects, error }}>
      {children}
    </ProjectsContext.Provider>
  );
};

export { ProjectsContext, ProjectsProvider };
