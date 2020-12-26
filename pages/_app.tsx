import { ProjectsProvider } from "../Context/ProjectsProvider";

function App({ Component, pageProps }) {
  return (
    <ProjectsProvider>
      <Component {...pageProps} />
    </ProjectsProvider>
  );
}

export default App;
