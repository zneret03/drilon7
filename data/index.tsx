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
    id: "Certificates",
    name: "Certificates",
    url: "/#certificate",
  },
  {
    id: "Contact",
    name: "Contact",
    url: "/#contact",
  },
]

const loadDelay = 2000
const enterDelay = 100

const srConfig = (delay = 200, viewFactor = 0.25) => ({
  origin: "bottom",
  distance: "20px",
  duration: 500,
  delay,
  rotate: { x: 0, y: 0, z: 0 },
  opacity: 0,
  scale: 1,
  easing: "cubic-bezier(0.645, 0.045, 0.355, 1)",
  mobile: true,
  reset: false,
  useDelay: "always",
  viewFactor,
  viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
})

export { socialMedia, sideLink, loadDelay, enterDelay, srConfig }
