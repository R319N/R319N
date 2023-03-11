
import EmailButton from "@/pages/contact/emailButton";
import PhoneCallButton from "@/pages/contact/phoneButton";
import WhatsAppButton from "@/pages/contact/whatsAppButton";
import colors from "@/utils/theme/LightTheme/base/colors";
import {
  Email,
  Facebook,
  GitHub,
  LinkedIn,
  Phone,
  Twitter,
  WhatsApp,
} from "@mui/icons-material";
const { socialMediaColors } = colors;
const dial = () => {
  window.open(`tel:${+27612023165}`, "_self");
};

export const attributes = [
  {
    id: "attribute-1",
    imgUrl: "/vectors/webDevelopment.jpg",
    title: "web development",
    description:
      " basically what i do is create web apps using modern technologies like react js",
  },
  {
    id: "attribute-2",
    imgUrl: "/vectors/responsiveDesign.jpg",
    title: "responsive design",
    description:
      "one of the most important things to make sure of in a web app is that the design is responsive. i always work an extra mile to make sure my designs respond to different designs",
  },
  {
    id: "attribute-3",
    imgUrl: "/vectors/cleanCode.jpg",
    title: "clean code",
    description:
      "the cleaner the code the easier to understand it, the easier to understand it, the more potential it holds to be utilized, thus i make sure my codes are clean and reusable ",
  },
  {
    id: "attribute-4",
    imgUrl: "/vectors/codeback.jpg",
    title: "template editing",
    description:
      "being familiar with codes has taught me a lot, i am a specialist in template editing, i can transform any template until you think i wrote the code",
  },
];

export const myProjects = [
  {
    id: "project-1",
    imgUrl: "/codeback.jpg",
    title: "igugu projects",
    description: "",
    technologies: "react JS, mui5, formik ",
  },
  {
    id: "world-2",
    imgUrl: "/planet-02.png",
    title: "moti",
    description: "",
    technologies: "react JS, mui5, formik ",
  },
  {
    id: "world-3",
    imgUrl: "/planet-03.png",
    title: "genexx",
    description: "",
    technologies: "next JS, mui5, ",
  },
  {
    id: "world-4",
    imgUrl: "/planet-04.png",
    title: "metaverse",
    description: "",
    technologies: "next JS, tailwind css, framer-motion  ",
  },
  {
    id: "world-5",
    imgUrl: "/planet-05.png",
    title: "delicious point",
    description: "",
    technologies: "html, css, javascript, bootstrap  ",
  },
];

export const startingFeatures = [
  "Find a world that suits you and you want to enter",
  "Enter the world by reading basmalah to be safe",
  "No need to beat around the bush, just stay on the gas and have fun",
];

export const contactDetailsData = [
  {
    name: "cell contact",
    details: "+27 61 202 3165",
    icon: <Phone />,
    color: "blue",
    component: <PhoneCallButton phoneNumber="+27 61 202 3165" />,
  },
  {
    name: "email",
    details: "wilfredr319n@gmail.com",
    icon: <Email />,
    color: "red",
    component: <EmailButton emailAddress="wilfredr319n@gmail.com" />,
  },
  {
    name: "whatsapp",
    details: "+27 61 202 3165",
    icon: <WhatsApp />,
    color: "green",
    link: " https://wa.me/27612023165?text=Hie%20wilfred%20reign",
    component: <WhatsAppButton phoneNumber="27612023165" />,
  },
];

export const html = [
  {
    imgUrl: "/stackSVG/html-1.svg",
    title: "html",
  },
  {
    imgUrl: "/stackSVG/render-jsx-logo-dark.svg",
    title: "jsx",
  },
  {
    imgUrl: "/stackSVG/react-2.svg",
    title: "tsx",
  },
];
export const css = [
  {
    imgUrl: "/stackSVG/css-3.svg",
    title: "css",
  },
  {
    imgUrl: "/stackSVG/material-ui-1.svg",
    title: "material ui",
  },
  {
    imgUrl: "/stackSVG/tailwindcss.svg",
    title: "tailwind css",
  },
  {
    imgUrl: "/stackSVG/bootstrap-4.svg",
    title: "bootstrap",
  },
];
export const javascript = [
  {
    imgUrl: "/stackSVG/javascript-1.svg",
    title: "javascript",
  },
  {
    imgUrl: "/stackSVG/react-2.svg",
    title: "react js",
  },
  {
    imgUrl: "/stackSVG/next-js.svg",
    title: "next js",
  },
  {
    imgUrl: "/stackSVG/typescript.svg",
    title: "typescript",
  },
];

export const stacks = [
  {
    imgUrl: "/stackSVG/git-icon.svg",
    title: "git",
  },
  {
    imgUrl: "/stackSVG/github-icon-1.svg",
    title: "github",
  },
  {
    imgUrl: "/stackSVG/visual-studio-code-1.svg",
    title: "vs code",
  },
  {
    imgUrl: "/stackSVG/mongodb-icon-1.svg",
    title: "mongodb",
  },
  {
    imgUrl: "/stackSVG/nodejs.svg",
    title: "node js",
  },
];

export const socialMediaRoutes = [
  {
    name: "facebook",
    icon: <Facebook sx={{ color: socialMediaColors.facebook.main }} />,
    url: "https://www.facebook.com/wilfredr319n",
  },
  {
    name: "twitter",
    icon: <Twitter sx={{ color: socialMediaColors.twitter.main }} />,
    url: "https://twitter.com/wilfred_reign",
  },
  {
    name: "linkedin",
    icon: <LinkedIn sx={{ color: socialMediaColors.linkedin.main }} />,
    url: "https://www.linkedin.com/in/wilfred-reign-037702215/",
  },
  {
    name: "github",
    icon: <GitHub sx={{ color: socialMediaColors.github.main }} />,
    url: "https://github.com/R319N",
  },
];
