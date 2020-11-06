import React from "react";
import {
  Twitter,
  Instagram,
  LinkedIn,
  Facebook,
  Github,
  External,
  Menu,
  Star,
  Fork,
  CurveRight,
  CurveLeft,
} from "./Index";
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
    case "External":
      return <External />;
    case "Menu":
      return <Menu />;
    case "Star":
      return <Star />;
    case "Fork":
      return <Fork />;
    case "CurveRight":
      return <CurveRight />;
    case "CurveLeft":
      return <CurveLeft />;
  }
};

export default Icons;
