import React, { useState, useEffect } from "react";
import { GlobalStyle } from "../css";
import { GithubProvider } from "../Context/GithubProvider";
import { Loader } from "./Index";
import "aos/dist/aos.css";

//*Components
import { Footer } from "../components/Index";
import LeftContent from "./LeftContent";

if (typeof window !== "undefined") {
  require("smooth-scroll")('a[href*="#"]');
}

interface PropTypes {
  children: React.ReactNode;
}

const Layout: React.FC<PropTypes> = ({ children }) => {
  const [isMounted, setIsMounted] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsMounted(false);
    }, 5000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <GithubProvider>
      <GlobalStyle />
      {isMounted ? (
        <Loader />
      ) : (
        <LeftContent>
          <>
            <div id="content">{children}</div>
            <Footer />
          </>
        </LeftContent>
      )}
    </GithubProvider>
  );
};

export default Layout;
