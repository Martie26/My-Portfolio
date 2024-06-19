import profileImg from "./assets/images/my_img.jpg";
import {
    FaHtml5,
    FaCss3Alt,
    FaJs,
    FaTerminal,
    FaNodeJs,
    FaAngleLeft,
    FaAngleRight,
    FaCloud,
    FaLeaf,
    FaDatabase,
    FaLock,
    FaReact,
    FaGlobe,
    FaNetworkWired
  } from "react-icons/fa";
  import {DiJqueryLogo} from "react-icons/di";
  import drumSetImg from "./assets/images/drum_set_website.jpg";
  import keeperImg from "./assets/images/keeper_scrnshot.jpg";
  import simonImg from "./assets/images/simon_img.jpg";
  import tindogImg from "./assets/images/tindog_img.jpg";
  import blogImg from "./assets/images/blog_img.jpg";
  import fttImg from "./assets/images/fttImg.jpg";
  import permalistImg from "./assets/images/permalistImg.jpg";

  


const logotext = "MARTIE";
const meta = {
    title: "Martie Barwise",
    description: "I’m Martie Barwise _ A full-stack web devloper living in Middelburg, South Africa.",
};

const introdata = {
    title: "I’m Martie Barwise",
    animated: {
        first: "I love coding",
        second: "I enjoy solving problems",
        third: "I aim to create helpful websites",
    },
    description: "Welcome to my website! I'm a full-stack web developer with a passion for continuous learning. Interested in learning more about me?",
    my_img: profileImg,
};

const dataabout = {
    title: "Allow me to introduce myself",
    aboutme_p1: "Back in 2021, I decided to try out coding and web development, since I have always had a love for working with computers and creating things. Over the past few years I have learned so much and I am excited to start applying that knowledge on real-life scenarios in a real-life environment.",
    aboutme_p2: "My main focus is to learn as much as I possible can from a company that is willing to share their knowledge and give me the chance to improve my skills. I am a very co-operative person and work well with other people.",
    aboutme_p3: "When I’m not at the computer, I’m usually reading, baking, hanging out with my husband, or taking photos.",
    aboutme_p4: "I have recently finished my studies and I'm ready to start working in my field to show others what I am capable of.",
};
const worktimeline = [{
        jobtitle: "Administrator & Bookkeeper",
        where: "Barwise Maintenance & Construction",
        date: "2021-2023",
        jobdesciption: "Key responsibilities were: Issuing quotations & invoices; doing all neccessary administration paperwork; confirm orders and payments; keep all of the books updated and upload data to Quickbooks.",
    },
];

const front_end_skills = [{
        name: "HTML",
        icon: <FaHtml5 />,
        value: 90,
    },
    {
        name: "CSS",       
          icon: <FaCss3Alt />,
        value: 70,
    },
    {
        name: "JavaScript",
          icon: <FaJs />,
        value: 80,
    },
    {
        name: "jQuery",
          icon: <DiJqueryLogo />,
        value: 60,
    },
    {
        name: "Bash Command Line",
          icon: <FaTerminal />,
        value: 65,
    },
];

const back_end_skills = [{
    name: "Node.js",
      icon: <FaNodeJs />,
    value: 80,
},
{
    name: "EJS",
      icon: <> <FaAngleLeft /> <FaAngleRight /> </>,
    value: 65,
},
{
    name: "APIs",
      icon: <FaCloud />,
    value: 65,
},
{
    name: "MongoDB",
      icon: <FaLeaf />,
    value: 75,
},
{
    name: "PostgreSQL",
      icon: <FaDatabase />,
    value: 70,
},
{
    name: "Authentication",
      icon: <FaLock />,
    value: 70,
},
{
    name: "React.js",
      icon: <FaReact />,
    value: 80,
},
{
    name: "Web3 Dev on the ICP",
      icon: <FaGlobe />,
    value: 50,
},
{
    name: "Blockchain Technology & NFTs",
      icon: <FaNetworkWired />,
    value: 50,
},
];

// const services = [{
//         title: "UI & UX Design",
//         description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
//     },
//     {
//         title: "Mobile Apps",
//         description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
//     },
//     {
//         title: "Wordpress Design",
//         description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
//     },
// ];

const dataportfolio = [{
        img: drumSetImg,
        description: "A simple HTML, CSS & JS app with event listeners",
        link: "https://www.drumset.freewebhostmost.com/",
    },
    {
        img: keeperImg,
        description: "An app made with HTML, CSS, JS & React that can take notes",
        link: "https://keeper-tt6s.onrender.com/",
    },
    {
        img: simonImg,
        description: "Simple web app version of the Simon Game made with HTML, CSS & JS",
        link: "https://martie26.github.io/The-Simon-Game/",
    },
    {
        img: tindogImg,
        description: "A static demo app version of Tinder for dogs made with HTML & CSS",
        link: "http://tindog.freewebhostmost.com/",
    },
    {
        img: blogImg,
        description: "Simple blog website made with CSS, EJS & JS",
        link: "https://thesimpleblogger.onrender.com",
    },
    {
        img: fttImg,
        description: "A map that keeps track of where you have been in the world - created with CSS, EJS, JS and has a PostgreSQL database",
        link: "https://github.com/Martie26/Family-Travel-Tracker",
    },
    {
        img: permalistImg,
        description: "Simple to-do-list that has a PostgreSQL database to permantly keep track of items - also created with CSS, EJS & JS",
        link: "https://github.com/Martie26/Permalist",
    },
];

const contactConfig = {
    YOUR_EMAIL: "mrsmartiebarwise@gmail.com",
    YOUR_FONE: "+27 (0)66 237 5945",
    description: "Do you have a question or want to work together?",
    // creat an emailjs.com account 
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    YOUR_SERVICE_ID: "service_id",
    YOUR_TEMPLATE_ID: "template_id",
    YOUR_USER_ID: "user_id",
};

const socialprofils = {
    github: "https://github.com/Martie26",
    website: "",
    linkedin: "https://www.linkedin.com/in/martie-barwise/",
};


const education = [{
    school_name: "High School Zeerust",
    date: "2016-2020",
    degree: "Matric Certificate",
    details: "Overall average of 71% and subjects included: Afrikaans Home Language, English First Additional Language, Mathematics, Life Orientation, Accounting, Computer Applications Technology, Visual Arts ",
    certificateURL: "../public/images/Matric_Certificate_jpg.jpg",
    buttonText: "Matric Certificate",
},
{
    school_name: "Shaw Academy",
    date: "February 2021 - September 2021",
    degree: "Professional Diploma in Coding & Technology",
    details: "In this course I learned the basics of front-end web development and made a prototype of a functional app on Justinmind.",
    certificateURL: "../public/images/Shaw_Diploma.pdf",
    buttonText: "Professional Diploma",
},
{
    school_name: "Udemy",
    date: " August 2021 - May 2024",
    degree: "Certificate of Completion",
    details: "This is the course where I learned everything to become a full-stack web developer. It had 61.5 hours of video content, over 400 lectures, and I built around 16 website projects. All of my skills listed below are what I have learned from this course.",
    certificateURL: "../public/images/Udemy_Certificate.pdf",
    buttonText: "Certificate of Completion",
},

];

export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    front_end_skills,
    back_end_skills,
   // services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
    education,
};