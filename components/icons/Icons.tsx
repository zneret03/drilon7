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
  ArrowDown
} from "./Index";
import { IconTypes } from "@lib/types";

export default function Icons({ name, fill }: IconTypes): JSX.Element {
  switch (name) {
    case "ArrowDown":
      return <ArrowDown />;
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
      return <Star fill={fill} />;
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
}
