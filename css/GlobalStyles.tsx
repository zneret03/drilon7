import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
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

      @media (max-width: 480px) {
        font-size: var(--fz-lg);
      }

      &.blur {
        overflow: hidden;
        header {
          background-color: transparent;
        }
      .container  {
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
        padding: 15px 30px;
        border : solid 1px;
        border-radius : 3px;
        border-color : #FAF3F3;
        color : #FAF3F3;
        font-size : 15px;
        font-weight : lighter;
        font-family : var(--font-mono);
        background-color : #0A192F;
        cursor: pointer;

        &:hover{
          background : #053041;
        }
    }

    :root {
    --dark-navy: #020c1b;
    --navy: #0a192f;
    --light-navy: #172a45;
    --lightest-navy: #303C55;
    --navy-shadow: rgba(2, 12, 27, 0.7);
    --slate: #8690B0;
    --light-slate: #a8b2d1;
    --lightest-slate: #ccd6f6;
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

    --border-radius: 4px;
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

  .container {
    width : 100%;
    margin : 0 auto;
    max-width: 1600px;
    min-height: 100vh;
  }

  .container-wrapper {
    padding: 45px 60px;
    max-width : 1000px;

    @media (max-width: 1080px) {
      padding: 35px 50px;
      }

    @media (max-width: 768px) {
      padding: 35px 40px 0px;
    }

    @media (max-width: 480px) {
      padding: 35px 27px;
    }
  }

  
  .numbered-heading {
    display: flex;
    align-items: center;
    position: relative;
    width: 100%;
    font-size: clamp(26px, 5vw, var(--fz-heading));
    white-space: nowrap;
    
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

  p{
    font-size : var(--fz-lg);

    @media (max-width: 1080px) {
     font-size : var(--fz-md);
    }

    @media (max-width: 480px) {
      font-size : var(--fz-sm);
    }

    @media (max-width: 492px) {
      font-size : var(--fz-sm);
    }
  }

  ul{
    li{
      @media (max-width: 492px) {
        margin : 0px 2px 0px;
      }
    }
  }
`;

export { GlobalStyle };
