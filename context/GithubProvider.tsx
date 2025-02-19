import React, { useEffect, createContext, useState } from "react";

interface IContext {
  information: Object[];
  error: Object;
}

interface PropTypes {
  children: React.ReactNode;
}

const GithubContext = createContext({} as IContext);

const GithubProvider: React.FC<PropTypes> = ({ children }) => {
  const [information, setInformation] = useState([]);
  const [error, setError] = useState({ active: false, type: 200 });

  const fetchGithubInformation = () => {
    (async () => {
      const API = "https://api.github.com/repos/zneret03/drilon7";

      await fetch(API)
        .then((response: any) => {
          if (response.status === 404) {
            setError({ active: true, type: 404 });
          }

          if (response.status === 403) {
            setError({ active: true, type: 403 });
          }

          return response.json();
        })
        .then((data) => {
          setInformation(data);
        })
        .catch((error) => {
          setError({ active: true, type: 400 });
          console.log("Error :", error.message);
        });
    })();
  };

  useEffect(fetchGithubInformation, []);

  return (
    <GithubContext.Provider value={{ information, error }}>
      {children}
    </GithubContext.Provider>
  );
};

export { GithubContext, GithubProvider };
