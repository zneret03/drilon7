import { createGlobalStyle } from "styled-components";
import TranstionStyles from "./TransitionStyles";
import Theme from "./CssVariables";

const GlobalStyle = createGlobalStyle`


  /* Scrollbar Styles */
  html {
    scrollbar-width: thin;
    scrollbar-color: var(--lightest-navy);
  }

  body::-webkit-scrollbar {
    width: 6px;
  }

  body::-webkit-scrollbar-track {
    background: var(--navy);
  }

  body::-webkit-scrollbar-thumb {
    background-color: var(--lightest-navy);
    border: 3px solid var(--lightest-navy);
    border-radius: 10px;
  }

    body {
        margin: 0;
        width: 100%;
        min-height: 100%;
        overflow-x: hidden;
        -moz-osx-font-smoothing: grayscale;
        -webkit-font-smoothing: antialiased;
        background-color: var(--navy);                                    
        color: var(--slate);
        font-family: var(--font-sans);
        font-size: var(--fz-xl);
        line-height: 1.3;
        scrollbar-width: thin;

      @media (max-width: 480px) {
        font-size: var(--fz-lg);
      }

      &.blur {
        overflow: hidden;
        header {
          background-color: transparent;
        }
      
      .container, section  {
          filter: blur(5px) brightness(0.7);
          pointer-events: none;
          user-select: none;
        }
    }

      html {
        box-sizing: border-box;
        width: 100%;
      }
    }

    button {
      color: var(--green);
      background-color: transparent;
      border: 1px solid var(--green);
      border-radius: var(--border-radius);
      font-size: var(--fz-xs);
      font-family: var(--font-mono);
      line-height: 1;
      text-decoration: none;
      cursor: pointer;
      transition: var(--transition);
      padding: 1.25rem 1.75rem;

      &:hover,
      &:focus,
      &:active {
        background-color: var(--green-tint);
        outline: none;
      }
      
      &:after {
        display: none !important;
      }
    }

    /* &::-webkit-slider-thumb {
     -webkit-appearance: none;
     width:  5px;
     height: 15px;
     border:1px solid black;
  } */

    /**Global css  */
    :root {
    --dark-navy-50 : #122845;
    --dark-navy: #020c1b;
    --navy: #0a192f;
    --light-navy: #172a45;
    --lightest-navy: #303C55;
    --navy-shadow: rgba(2, 12, 27, 0.7);
    --slate: #8690B0;
    --light-slate: #a8b2d1;
    --lightest-slate: #ccd6f6;
    --lightest-slate-20: #E4F1FF;
    --white: #e6f1ff;
    --green: #64ffda;
    --green-tint: rgba(100, 255, 218, 0.1);

    --font-sans: 'Calibre', 'San Francisco', 'SF Pro Text', -apple-system, system-ui, sans-serif;
    --font-mono: 'SF Mono', 'Fira Code', 'Fira Mono', 'Roboto Mono', monospace;

    --fz-xxs: 12px;
    --fz-xs: 13px;
    --fz-sm: 14px;
    --fz-md: 16px;
    --fz-lg: 18px;
    --fz-xl: 20px;
    --fz-xxl: 22px;
    --fz-heading: 32px;

    --border-radius: 5px;
    --nav-height: 100px;
    --nav-scroll-height: 70px;

    --tab-height: 42px;
    --tab-width: 120px;

    --webkit-filter-colored : grayscale(0%); 
    --filter-colored :grayscale(0%);

    --webkit-filter : grayscale(100%);
    --filter : grayscale(100%);

    --easing: cubic-bezier(0.645, 0.045, 0.355, 1);
    --transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);

    --hamburger-width: 30px;

    --ham-before: top 0.1s ease-in 0.25s, opacity 0.1s ease-in;
    --ham-before-active: top 0.1s ease-out, opacity 0.1s ease-out 0.12s;
    --ham-after: bottom 0.1s ease-in 0.25s, transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19);
    --ham-after-active: bottom 0.1s ease-out, transform 0.22s cubic-bezier(0.215, 0.61, 0.355, 1) 0.12s;
  }

  .loading {
    text-align: center;
    color: var(--lightest-slate);
  }

  .sub-title {
    font-family: var(--font-mono);
    font-size: var(--fz-sm);
    color: var(--green);

    &:after {
      bottom: 0.1em;
    }
  }

  .container {
    position: relative;
    width : 100%;
    margin : 0 auto;
    max-width: 1600px;
    min-height: 100vh;
  }

  .container-wrapper {
    padding: 0 60px;
    max-width : 1000px;

    @media (max-width: 1080px) {
      padding: 0 50px;     
    }

    @media (max-width: 768px) {
      padding: 0 40px 0px;
    }

    @media (max-width: 480px) {
      padding: 0 27px;
    }
  }
  
  .numbered-heading {
    display: flex;
    align-items: center;
    position: relative;
    width: 100%;
    font-size: clamp(26px, 5vw, var(--fz-heading));
    white-space: nowrap;

    @-moz-document url-prefix(){
      font-size : var(--fz-heading);

      @media (max-width: 1080px) {
        font-size : var(--fz-heading);
      }

      @media (max-width: 768px) {
        font-size : var(--fz-xxl);
      }

    }
    
    &:before {
      position: relative;
      bottom: 4px;
      counter-increment: section;
      margin-right: 10px;
      color: var(--green);
      font-family: var(--font-mono);
      font-size: clamp(var(--fz-md), 3vw, var(--fz-xl));
      font-weight: 400;

      @media (max-width: 480px) {
        margin-bottom: -3px;
        margin-right: 5px;
      }
    }

    &:after {
      content: '';
      display: block;
      position: relative;
      width: 300px;
      height: 1px;
      margin-left: 20px;
      background-color: var(--lightest-navy);

      @media (max-width: 1080px) {
        width: 200px;
      }

      @media (max-width: 768px) {
        width: 100%;
      }

      @media (max-width: 600px) {
        margin-left: 10px;
      }
    }
  }


  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0 0 10px 0;
    font-weight: 600;
    color: var(--lightest-slate);
    line-height: 1.1;
  }

  .link {
    text-decoration : none;
      color : var(--white);
      position: absolute;
      padding : 0px 5px;
      z-index : 1;
      
      &:after {
        content: '';
        display: block;
        width: 0px;
        height: 1px;
        background-color: #fff;
        transition: width .3s;
      }

      &:hover::after{
        width: 100%;  
        transition : width .3s;
      }
  }

  p{
    font-size : var(--fz-lg);
    
    @media (max-width: 1080px) {
     font-size : var(--fz-lg);
    }

    @media (max-width: 480px) {
      font-size : var(--fz-lg);
    }

    @media (max-width: 492px) {
      font-size : var(--fz-lg);
    }
  }

  section {
    margin : 0 auto;
    max-width: 1000px;
    padding: 50px 0 200px;

    @media (max-width: 1080px) {
      padding: 100px 90px;
    }

    @media (max-width: 768px) {
      padding: 80px 60px;
    }
    
    @media (max-width: 480px) {
      padding: 60px 30px;
    }
  }


  ul{
    li{
      @media (max-width: 492px) {
        margin : 0px 2px 0px;
      }
    }
  }

  .big-heading {
    margin: 0;
    font-size: clamp(40px, 8vw, 80px);
  }

  .subtitle {
    color: var(--green);
    margin: 0 0 20px 0;
    font-size: var(--fz-md);
    font-family: var(--font-mono);
    font-weight: 400;
    line-height: 1.5;
    @media (max-width: 1080px) {
      font-size: var(--fz-sm);
    }
    @media (max-width: 768px) {
      font-size: var(--fz-xs);
    }
    a {
      ${Theme.inlineLink}
      line-height: 1.5;
    }
  }

  a {
    color: var(--light-slate);
    text-decoration: none;
    text-align: center;

    &:hover {
    color: var(--green);
    }
  }

  ${TranstionStyles}
`;

export default GlobalStyle;
