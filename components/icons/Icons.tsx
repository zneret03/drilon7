import React from "react";
import { Twitter, Instagram, LinkedIn, Facebook, Github } from "./Index";
interface PropTypes {
  name: string;
}

const Icons: React.FC<PropTypes> = ({ name }) => {
  switch (name) {
    case "Twitter":
      return <Twitter />;
    case "Instagram":
      return <Instagram />;
    case "LinkedIn":
      return <LinkedIn />;
    case "Facebook":
      return <Facebook />;
    case "Github":
      return <Github />;
  }
};

export default Icons;
