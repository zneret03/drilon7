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
    url: "/#home",
  },
  {
    id: "About",
    name: "About",
    url: "/#about",
  },
  {
    id: "Works",
    name: "Works",
    url: "/#work",
  },
  {
    id: "Contact",
    name: "Contact",
    url: "/#contact",
  },
];

const projectInformation = [
  {
    feature: "Feature Project",
    title: "Fullstack Shopify",
    description:
      "A  fullstack shopify, that will show case your fullstack skills and front end designing in different technology such as firebase, netlify-functions, tailwind and reactJs and more",
    technology: ["Netlify-lambda", "TailwindCss", "React", "Chart.js"],
    demo: "https://shopifyid.netlify.app/",
    source: "https://github.com/zneret03/shopify",
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
  {
    feature: "Feature Project",
    title: "Erebus Theme",
    description:
      "A minimal dark blue in visual studio code theme, it helps to rest your eyes and enjoy your project development in your free time",
    technology: ["vscode", "Dark", "Erebus"],
    demo: "https://marketplace.visualstudio.com/items?itemName=Erebus.erebus",
    source: "https://github.com/zneret03/Erebus-Theme",
    image: "Erebus.png",
  },
];

const workExperience = [
  {
    id: 1,
    title: "AcadArena Inc.",
    imageSource: "/image/AcadArena.png",
    source: "AcadArena.com",
    description:
      "Designed and developed front-end web application that is made by react, nextJs, tailwind and firebase as leading technology, making web application that will be using by the different teams/university in different game platforms, transforming prototypes into reusable react components",
    startDate: "April",
    endDate: "August 2021",
  },
  {
    id: 2,
    title: "Archdiocese Jaro",
    imageSource: "/image/Archdiocese.png",
    source: "https://www.facebook.com/Jarosoccom/",
    description: `Designed and developed user-friendly web application where they can store all the archives data with different category and search into it easily. and
      Building wireframes & prototype design, which were turned into functional, fast and performance wise web application`,
    startDate: "April",
    endDate: "August 2019",
  },
  {
    id: 3,
    title: "Freelance",
    imageSource: "/image/Freelance.png",
    source: null,
    description:
      "Making Exceptional Web application, depending on the client requirements. Designing and making performance wise also user-friendly web and desktop applications. Designing and making prototypes that will later establish as web or desktop applications",
    startDate: "Junuary 2019",
    endDate: "Present",
  },
];

const loadDelay = 2000;
const enterDelay = 1000;

export {
  socialMedia,
  sideLink,
  projectInformation,
  loadDelay,
  enterDelay,
  workExperience,
};
