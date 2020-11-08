import { keyframes, css } from "styled-components";

const StyledFrames = keyframes`
    to { stroke-dashoffset: 0 }
`;

const FramesExit = keyframes`
  from {
    fill : transparent;
  }
  to {
    opacity : 0;
    transform : scale(0.9);
    transition : opacity 300ms, transform 300ms;
  }
`;

const AnimateLogo = css`
  #logo path:nth-child(1) {
    stroke-dasharray: 706;
    stroke-dashoffset: 706;
    animation: ${StyledFrames} 2s ease forwards;
  }
  #logo path:nth-child(2) {
    stroke-dasharray: 719;
    stroke-dashoffset: 719;
    animation: ${StyledFrames} 2s ease forwards 0.3s;
  }
  #logo path:nth-child(3) {
    stroke-dasharray: 620;
    stroke-dashoffset: 620;
    animation: ${StyledFrames} 2s ease forwards 0.6s;
  }
  #logo path:nth-child(4) {
    stroke-dasharray: 719;
    stroke-dashoffset: 719;
    animation: ${StyledFrames} 2s ease forwards 0.9s;
  }
  #logo path:nth-child(5) {
    stroke-dasharray: 467;
    stroke-dashoffset: 467;
    animation: ${StyledFrames} 2s ease forwards 1.2s;
  }
  #logo path:nth-child(6) {
    stroke-dasharray: 690;
    stroke-dashoffset: 690;
    animation: ${StyledFrames} 2s ease forwards 1.5s;
  }
  #logo path:nth-child(7) {
    stroke-dasharray: 633;
    stroke-dashoffset: 633;
    animation: ${StyledFrames} 2s ease forwards 1.8s;
  }
  #logo path:nth-child(8) {
    stroke-dasharray: 719;
    stroke-dashoffset: 719;
    animation: ${StyledFrames} 2s ease forwards 2.1s;
  }
  #logo path:nth-child(9) {
    stroke-dasharray: 745;
    stroke-dashoffset: 745;
    animation: ${StyledFrames} 2s ease forwards 3s;
  }

  #logo {
    animation: ${FramesExit} 0.5s ease forwards 4s;
  }
`;

export default AnimateLogo;
