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
  Logo,
  Folder,
  CurveRight,
  CurveLeft,
  Arrow,
} from "./Index";
interface PropTypes {
  name: string;
}

const Icons: React.FC<PropTypes> = ({ name }) => {
  switch (name) {
    case "Arrow":
      return <Arrow />;
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
    case "Folder":
      return <Folder />;
    case "Fork":
      return <Fork />;
    case "Logo":
      return <Logo />;
    case "CurveRight":
      return <CurveRight />;
    case "CurveLeft":
      return <CurveLeft />;
  }
};

export default Icons;
