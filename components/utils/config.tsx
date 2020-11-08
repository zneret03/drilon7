const socialMedia = [
  {
    name: "Twitter",
    url: "https://twitter.com/DrilonIan",
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/zen.codes/",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/ian-drilon-952a37179/",
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com/ian.drilon.7/",
  },
  {
    name: "Github",
    url: "https://github.com/zneret03",
  },
];

const sideLink = [
  {
    id: "Home",
    name: "Home",
    url: "#home",
  },
  {
    id: "About",
    name: "About",
    url: "#about",
  },
  {
    id: "Works",
    name: "Works",
    url: "#work",
  },
  {
    id: "Contact",
    name: "Contact",
    url: "#contact",
  },
];

const projectInformation = [
  {
    feature: "Feature Project",
    title: "Custom Shopify",
    description:
      "A custom build shopify, that will show case your fullstack skills and front end designing in different technology such as firebase, netlify-functions, tailwind and reactJs and more",
    technology: ["Netlify-lambda", "TailwindCss", "React"],
    demo: "https://ecommerceid.netlify.app",
    source: "https://github.com/zneret03/ecommerce",
    image: "dashboard.png",
  },
  {
    feature: "Feature Project",
    title: "GitProfile",
    description:
      "A nicer look at your GitHub profile and repository stats with data visualizations of your top languages and stars. Sort through your top repos by number of stars, forks, and size.",
    technology: ["Chart.js", "TailwindCss", "React"],
    demo: "https://gitprofilee.netlify.app/",
    source: "https://github.com/zneret03/gitprofile",
    image: "frontpage.png",
  },
];

const loadDelay = 2000;
const enterDelay = 1000;

export { socialMedia, sideLink, projectInformation, loadDelay, enterDelay };
