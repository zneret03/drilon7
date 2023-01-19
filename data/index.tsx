import { v4 as uuidv4 } from "uuid"

const jobs = [
  {
    id: 1,
    company: "AcadArena",
    url: null,
    range: "Janguary - June 2017",
    description: "dwadawdwa",
  },
]

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
]

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
]

const noteworthProject = [
  {
    id: uuidv4(),
    year: 2020,
    projectName: "BCIF Website",
    projectMadeAt: "Church Place",
    projectTitle: "Church Website built in React and tailwind and other stuffs",
    demo: "https://bcif.netlify.app/",
    source: "https://github.com/zneret03/bethlehem",
    projectDescription:
      "knowing the basics fundamentals by building a simple static Church website in reactJs and Tailwind",
    projectTechnology: {
      projectTechnology: ["React", "TailwindCss"],
    },
  },
  {
    id: uuidv4(),
    year: 2019,
    projectName: "CPU Algorithm",
    projectMadeAt: "College University",
    projectTitle: "CPU Algorithm",
    demo: "",
    source: "https://github.com/zneret03/CPU_algorithm",
    projectDescription:
      "A simple algorithm showing the realtime instruction and process using shortest job first and others",
    projectTechnology: {
      projectTechnology: ["C#", "Bunifu Framework"],
    },
  },
  {
    id: uuidv4(),
    year: 2020,
    projectName: "Clinic Management System",
    projectMadeAt: "College University",
    projectTitle: "A Dynamic Website that is built in with Boostrap and PHP",
    demo: "",
    source: "https://github.com/zneret03/Clinic_Management",
    projectDescription:
      "A Clinic management system with boostrap, html5, css3 and PHP using MVC architecture. To showcase my skills in oop",
    projectTechnology: {
      projectTechnology: ["Boostrap", "PHP", "HTML5 & CSS3"],
    },
  },
  {
    id: uuidv4(),
    year: 2020,
    projectName: "E-Commerce",
    projectMadeAt: "Home",
    projectTitle: "E-Commerce with reactJs and Firebse, Netlify-Functions",
    demo: "https://ecommerceid.netlify.app/",
    source: "https://github.com/zneret03/ecommerce",
    projectDescription:
      "A custom build shopify, that will show case your fullstack skills and front end designing in different technology",
    projectTechnology: {
      projectTechnology: ["Netlify-lambda", "TailwindCss", "React"],
    },
  },
  {
    id: uuidv4(),
    year: 2020,
    projectName: "Nail Disease Detection",
    projectMadeAt: "University Thesis",
    projectTitle: "Nail Disease Detection",
    demo: "",
    source: "https://github.com/zneret03/nail_detection",
    projectDescription:
      "Finger Nail Disease Detection is a standalone application that will detect the early stage of systemic disease using the color and texture of the fingernails in our hands, this project automatically detect the anomalies and output a early stage of differeny systemic diseases, also this project use SVM supervised machine learning approach along with canny edge detection for finger nail edge detection also this project is built in python flask for backend and electron + reactjs in front-end.",
    projectTechnology: {
      projectTechnology: [
        "React",
        "Machine Learning",
        "Segmentation",
        "Python",
      ],
    },
  },
  {
    id: uuidv4(),
    year: 2020,
    projectName: "Online Health ",
    projectMadeAt: "Home",
    projectTitle: "Online Health Care Management System",
    demo: "",
    source: "https://github.com/cjp098/health-center",
    projectDescription:
      "A online health care where users can schedule their appointments and diagnosed their current disease",
    projectTechnology: {
      projectTechnology: ["ReactJs", "TailwindCss", "NetlifyLambda"],
    },
  },
  {
    id: uuidv4(),
    year: 2019,
    projectName: "Ordering System",
    projectMadeAt: "College University",
    projectTitle: "Ordering System",
    demo: "",
    source: "https://github.com/zneret03/Ordering",
    projectDescription:
      "A Simple Ordering System using a data structure sample just as linkedList and others",
    projectTechnology: {
      projectTechnology: ["Java"],
    },
  },
  {
    id: uuidv4(),
    year: 2022,
    projectName: "Project-cli",
    projectMadeAt: "Home",
    projectTitle: "Project-cli build with nodejs for faster productivity",
    demo: "",
    source: "https://github.com/zneret03/project-cli",
    projectDescription:
      "A cli for generating starter files for different framework with tailwindcss pre-installed",
    projectTechnology: {
      projectTechnology: ["Nodejs", "Inquirer", "Chalk-js"],
    },
  },
  {
    id: uuidv4(),
    year: 2020,
    projectName: "R Machine Learning",
    projectMadeAt: "",
    projectTitle:
      "Classification of Iris Flowers using caret Machine Learning library",
    demo: "",
    source: "https://github.com/zneret03/classification_irisFlowers",
    projectDescription:
      "Classification of Iris Flowers built in caret machine learning library that classified the different types of flowers across data sets, this project has different data visualization and data analyzation ",
    projectTechnology: {
      projectTechnology: ["Machine Learning", "Data Science", "Caret"],
    },
  },
  {
    id: uuidv4(),
    year: 2020,
    projectName: "Rice Procurement",
    projectMadeAt: "Home",
    projectTitle: "Rice Procurement Management System",
    demo: "",
    source: "https://github.com/EceLaaah/rptm",
    projectDescription:
      "Rice Procurement Managment System is a bidding system that helps the farmers sell their product in the highest amount of bidding by the traders, it was also built by reactjs, tailwindcss, firebase and more...",
    projectTechnology: {
      projectTechnology: ["React", "tailwindCss"],
    },
  },
  {
    id: uuidv4(),
    year: 2021,
    projectName: "BCIF Website",
    projectMadeAt: "Church Place",
    projectTitle: "Church Website built in React and tailwind and other stuffs",
    demo: "https://bcif.netlify.app/",
    source: "https://github.com/zneret03/bethlehem",
    projectDescription:
      "knowing the basics fundamentals by building a simple static Church website in reactJs and Tailwind",
    projectTechnology: {
      projectTechnology: ["React", "TailwindCss"],
    },
  },
  {
    id: uuidv4(),
    year: 2020,
    projectName: "Sample Portoflio",
    projectMadeAt: "Home",
    projectTitle:
      "Experimenting Html, Css3 and vanilla JS example static portfolio",
    demo: "https://zneret03.github.io/practice/",
    source: "https://github.com/zneret03/practice",
    projectDescription:
      "Experimenting with animations with CSS3 and vanilla JS, with animations and other stuffs, to showcase my vanilla JS and CSS 3 skills",
    projectTechnology: {
      projectTechnology: ["HTML5", "CSS3", "Javascript"],
    },
  },
  {
    id: uuidv4(),
    year: 2022,
    projectName: "Shortcut CLI for react + tailwind",
    projectMadeAt: "Home",
    projectTitle: "Shortcut CLI for react + tailwind",
    demo: "",
    source: "https://github.com/zneret03/project-cli",
    projectDescription:
      "This CLI will maximize your productivity, you just need to type shortcut key such as 'tcli' and it will give you and option what kind of web application you will develop such React/NextJs and if its javascript or typescript, it also automatically generate the boilerplate with prebuilt tailwind in the application",
    projectTechnology: {
      projectTechnology: ["React", "CLI", "bash script"],
    },
  },
  {
    id: uuidv4(),
    year: 2020,
    projectName: "Supply Management System",
    projectMadeAt: "College University",
    projectTitle: "Supply Management System with sub system (Point of Sale)",
    demo: "",
    source: "https://github.com/zneret03/supply_management",
    projectDescription:
      "My school unversity project a simple OOP Supply Management System built in C#, with MVC architecture for reusable methods and C# classes",
    projectTechnology: {
      projectTechnology: ["C#", "Bunifu Framework"],
    },
  },
  {
    id: uuidv4(),
    year: 2020,
    projectName: "gitProfile",
    projectMadeAt: "Home",
    projectTitle: "Integrating Github Api with ReactJs, Tailwind and Chart.js",
    demo: "https://gitprofilee.netlify.app/",
    source: "https://github.com/zneret03/gitprofile",
    projectDescription:
      "A nicer look at your GitHub profile and repository stats with data visualizations of your top languages and stars.",
    projectTechnology: {
      projectTechnology: ["Chart.js", "TailwindCss", "React"],
    },
  },
]

const projectInformation = [
  {
    feature: "Feature Project",
    title: "Nail Disease Detection",
    description:
      "nail disease detection is an application that is built in ReactJs, Sass, Electron, Python and Flask. This application track the early stage of nail disease using tensorflow and cnn. this is also my thesis propsal in my last year in college",
    technology: ["ReactJs", "Sass", "Electron", "Python Flask"],
    demo: "empty",
    source: "https://github.com/zneret03/nail_detection",
    image: "nail_disease.png",
  },
  {
    feature: "Feature Project",
    title: "Fullstack Shopify",
    description:
      "A  fullstack shopify, that will show case your fullstack skills and front end designing in different technology such as firebase, netlify-functions, tailwind and reactJs and more",
    technology: ["Netlify-lambda", "TailwindCss", "React", "Chart.js"],
    demo: "empty",
    source: "https://github.com/zneret03/shopify",
    image: "dashboard.png",
  },
  // {
  //   feature: "Feature Project",
  //   title: "GitProfile",
  //   description:
  //     "A nicer look at your GitHub profile and repository stats with data visualizations of your top languages and stars. Sort through your top repos by number of stars, forks, and size.",
  //   technology: ["Chart.js", "TailwindCss", "React"],
  //   demo: "https://gitprofilee.netlify.app/",
  //   source: "https://github.com/zneret03/gitprofile",
  //   image: "frontpage.png",
  // },
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
  {
    feature: "Feature Project",
    title: "Rice Procurement Management System",
    description:
      "Rice Procurement Managment System is a bidding system that helps the farmers sell their product in the highest amount of bidding by the traders, it was also built by reactjs, tailwindcss, firebase and more...",
    technology: ["Reactjs", "System", "TailwindCss"],
    demo: "empty",
    source: "https://github.com/EceLaaah/rptm",
    image: "rptm.png",
  },
]

const workExperience = [
  {
    id: uuidv4(),
    title: "AcadArena Inc.",
    imageSource: "/image/AcadArena.png",
    source: "AcadArena.com",
    description:
      "Designed and developed front-end web application that is made by react, nextJs, tailwind and firebase as leading technology, making web application that will be using by the different teams/university in different game platforms, transforming prototypes into reusable react components",
    startDate: "April",
    endDate: "August 2021",
  },
  {
    id: uuidv4(),
    title: "Archdiocese Jaro",
    imageSource: "/image/Archdiocese.png",
    source: "https://www.facebook.com/Jarosoccom/",
    description: `Designed and developed user-friendly web application where they can store all the archives data with different category and search into it easily. and
      Building wireframes & prototype design, which were turned into functional, fast and performance wise web application`,
    startDate: "April",
    endDate: "August 2019",
  },
  {
    id: uuidv4(),
    title: "Freelance",
    imageSource: "/image/Freelance.png",
    source: null,
    description:
      "Making Exceptional Web application, depending on the client requirements. Designing and making performance wise also user-friendly web and desktop applications. Designing and making prototypes that will later establish as web or desktop application",
    startDate: "Junuary 2019",
    endDate: "Present",
  },
  {
    id: uuidv4(),
    title: "Alabaster Tech",
    imageSource: "/image/ecommerce.png",
    source: null,
    description:
      "Meeting and planning in different type of projects, while managing other inters, also making wireframes and converting into functional web application. collaborating with senior developer for different and better approach on revamping their product which is takeOutPh",
    startDate: "March",
    endDate: "May",
  },
  {
    id: uuidv4(),
    title: "Senti AI",
    imageSource: "/image/sent-ai.jpg",
    source: null,
    description:
      "Meeting and colaborating with co-engineers to build and implement AI strategies using DOC.AI and Optical Character Reconignition, helping building deployment automation so that engineers will have easy and developer friendly approach of deployment using terraform",
    startDate: "March",
    endDate: "May",
  },
]

const certificates = [
  {
    id: uuidv4(),
    title: "HackFest Loyola",
    subtitle: "hackfest",
    source:
      "https://github.com/zneret03/drilon7/blob/development/public/certificates/unplugged%2C%20IanDrilon.pdf",
  },
  {
    id: uuidv4(),
    title: "Asean Data Science Explorers",
    subtitle: "DSE",
    source:
      "https://github.com/zneret03/drilon7/blob/development/public/certificates/03%20Second%20Runner%20Up%20-%20National%20Finals%20Certificate.pdf",
  },
]

const loadDelay = 2000
const enterDelay = 1000

export {
  noteworthProject,
  certificates,
  socialMedia,
  sideLink,
  projectInformation,
  loadDelay,
  enterDelay,
  workExperience,
  jobs,
}
